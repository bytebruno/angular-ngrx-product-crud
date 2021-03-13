import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { GuidHelper } from 'src/app/utils/GuidHelper'
import { IProduct, IProductCategory, IProductPrice, IProductRetailer } from '../../model/product.model'
import { addProductRequest, getOneProductRequest, updateProductRequest } from '../../state/products.actions'
import { selectedProduct } from '../../state/products.selectors'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCreateComponent implements OnInit {
  product!: IProduct
  productForm!: FormGroup
  selectedItems = []
  categoryDropdownSettings = {}
  retailerDropdownSettings = {}
  items!: FormArray
  productId: string = ''
  isAddMode: boolean = false
  product$!: Observable<IProduct | null>
  notifier = new Subject()

  categoriesList: IProductCategory[] = [
    {
      Id: 'ad327ca5-ec10-4051-9b05-43ebaa3157ce',
      Name: 'Whisky',
    },
    {
      Id: '9f4b3e22-a369-4fb7-9832-cf83f0bc3663',
      Name: 'Scotch',
    },
  ]

  retailersList: IProductRetailer[] = [
    {
      Id: 'e417d0b1-9cdf-48be-92b5-cf78a0eaa5d5',
      Name: 'Bruno',
    },
    {
      Id: 'e417d0b1-9cdf-48be-92b5-cf78a0eaa5dz',
      Name: 'Visual Wallet',
    },
    {
      Id: 'e417d0b1-9cdf-48be-92b5-cf78a0eaa5d3',
      Name: 'Omnia',
    },
  ]

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id']
    this.isAddMode = !this.productId

    this.categoryDropdownSettings = {
      idField: 'Id',
      textField: 'Name',
      enableCheckAll: false,
      itemsShowLimit: 10,
      allowSearchFilter: true,
    }

    this.retailerDropdownSettings = {
      singleSelection: true,
      idField: 'Id',
      textField: 'Name',
      enableCheckAll: false,
      itemsShowLimit: 10,
      allowSearchFilter: true,
      closeDropDownOnSelection: true,
    }

    this.productForm = this.formBuilder.group({
      Id: [''],
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      SKU: ['', Validators.required],
      Categories: ['', Validators.required],
      Prices: this.formBuilder.array([]),
    })

    this.items = this.productForm.get('Prices') as FormArray

    if (!this.isAddMode) {
      this.store.dispatch(getOneProductRequest({ productId: Number.parseInt(this.productId) }))

      this.product$ = this.store.select(selectedProduct)
      this.product$.pipe(takeUntil(this.notifier)).subscribe((product) => {
        if (product === null) this.router.navigate(['/products'])
        else {
          debugger

          let productClone = JSON.parse(JSON.stringify(product))
          productClone.Prices.map((price: any, i: number) => {
            price.Retailer = [price.Retailer]
            this.addPriceFormGroup(price)
          })
          this.productForm.patchValue(productClone)
          console.log(this.productForm.value)
        }
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

  removePrice(index: number): void {
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
      debugger
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
