import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { GuidHelper } from 'src/app/utils/GuidHelper'
import { setLoading } from '../../../shared/components/loading-spinner/state/loading.action'
import { IProduct, IProductPrice } from '../../model/product.model'
import { addProductRequest, getOneProductRequest, updateProductRequest } from '../../state/products.actions'
import { productToEdit } from '../../state/products.selectors'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCreateComponent implements OnInit {
  product!: IProduct
  productForm!: FormGroup

  items!: FormArray
  productId: string = ''
  isAddMode: boolean = false
  product$!: Observable<IProduct | null>
  notifier = new Subject()

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id']
    this.isAddMode = !this.productId

    this.productForm = this.formBuilder.group({
      Id: [''],
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      SKU: ['', Validators.required],
      Categories: [[], Validators.required],
      Prices: this.formBuilder.array([]),
    })

    this.items = this.productForm.get('Prices') as FormArray

    if (!this.isAddMode) {
      this.store.dispatch(getOneProductRequest({ productId: Number.parseInt(this.productId) }))
      this.store.dispatch(setLoading({ loading: true }))

      this.product$ = this.store.select(productToEdit)
      this.product$.pipe(takeUntil(this.notifier)).subscribe((product) => {
        if (product === null) return
        this.product = product
        let productClone = JSON.parse(JSON.stringify(product))

        this.items.clear()

        productClone.Prices.map((price: any, i: number) => {
          price.Retailer = [price.Retailer]
          this.addPriceFormGroup(price)
        })
        this.productForm.patchValue(productClone)
        this.cdr.detectChanges()
      })
    } else {
      this.addPriceFormGroup()
    }
  }

  createPriceFormGroup(price?: IProductPrice): FormGroup {
    return this.formBuilder.group({
      Id: price?.Id ? [price.Id] : [''],
      Retailer: price?.Retailer ? [price.Retailer, Validators.required] : ['', Validators.required],
      Price: price?.Price ? [price.Price, Validators.required] : ['', Validators.required],
      Tier: price?.Tier ? [price.Tier, Validators.required] : ['', Validators.required],
      UpdateTime: price?.UpdateTime ? [price.UpdateTime] : [''],
    })
  }

  addPriceFormGroup(price?: IProductPrice): void {
    if (price) this.items.push(this.createPriceFormGroup(price))
    else this.items.push(this.createPriceFormGroup())
  }

  removePriceFormGroup(index: number): void {
    if (index === 0) return
    this.items.removeAt(index)
  }

  get ProductFormPricesGroups() {
    return this.productForm.get('Prices') as FormArray
  }

  saveProduct() {
    if (this.isAddMode) {
      const normalizedObject = this.normalizeToAdd()
      this.store.dispatch(addProductRequest({ product: normalizedObject }))
    } else {
      const normalizedObject = this.normalizeToUpdate()
      this.store.dispatch(updateProductRequest({ product: normalizedObject }))
    }
  }

  normalizeToAdd() {
    let productClone = JSON.parse(JSON.stringify(this.productForm.value))
    productClone.Id = GuidHelper.newGuid().toString()
    productClone.Prices.map((price: any) => {
      price.Retailer = price.Retailer[0]
      price.Id = GuidHelper.newGuid().toString()
      price.UpdateTime = new Date()
    })

    return productClone
  }

  normalizeToUpdate() {
    let productClone = JSON.parse(JSON.stringify(this.productForm.value))
    productClone.id = this.productId
    productClone.Prices.map((price: any) => {
      price.Retailer = price.Retailer[0]
      price.UpdateTime = new Date()
    })

    return productClone
  }
}
