import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup } from '@angular/forms'
import { Store } from '@ngrx/store'
import { GuidHelper } from 'src/app/utils/GuidHelper'
import { IProduct, IProductCategory, IProductRetailer } from '../../model/product.model'
import { addProductRequest } from '../../state/products.actions'

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

  constructor(private store: Store, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
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
      Name: [''],
      Description: [''],
      SKU: [''],
      Categories: [''],
      Prices: this.formBuilder.array([this.createPriceFormGroup()]),
    })

    this.items = this.productForm.get('Prices') as FormArray
  }

  createPriceFormGroup(): FormGroup {
    return this.formBuilder.group({
      Id: [''],
      Retailer: [''],
      Price: [''],
      Tier: [''],
      UpdateTime: [''],
    })
  }

  addPrice(): void {
    this.items.push(this.createPriceFormGroup())
  }

  removePrice(index: number): void {
    if (index === 0) return
    this.items.removeAt(index)
  }

  get ProductFormPricesGroups() {
    return this.productForm.get('Prices') as FormArray
  }

  saveProduct() {
    const normalizedObject = this.normalizeObjectToSave()
    this.store.dispatch(addProductRequest({ product: normalizedObject }))
  }

  normalizeObjectToSave() {
    let productClone = JSON.parse(JSON.stringify(this.productForm.value))
    productClone.Id = GuidHelper.newGuid().toString()
    productClone.Prices.map((price: any) => {
      price.Retailer = price.Retailer[0]
      price.Id = GuidHelper.newGuid().toString()
      price.UpdateTime = new Date()
    })

    return productClone
  }
}
