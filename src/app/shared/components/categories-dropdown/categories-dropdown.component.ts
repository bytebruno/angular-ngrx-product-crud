import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { ControlContainer, FormGroupDirective } from '@angular/forms'
import { IProductCategory } from 'src/app/products/model/product.model'

@Component({
  selector: 'app-categories-dropdown',
  templateUrl: './categories-dropdown.component.html',
  styleUrls: ['./categories-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class CategoriesDropdownComponent implements OnInit {
  @Input() controlName: string = ''

  categoryDropdownSettings = {}
  categoriesList: IProductCategory[] = [
    {
      Id: 'ad327ca5-ec10-4051-9b05-43ebaa3157ce',
      Name: 'Appliances',
    },
    {
      Id: '6aa45096-516e-4534-92f1-c099ebb277b8',
      Name: 'Apps & Games',
    },
    {
      Id: 'd3a6b4a3-26b6-4177-bc75-c1eb4d3714dd',
      Name: 'Arts, Crafts, & Sewing',
    },
    {
      Id: '7a9e9e3c-f5fb-4272-b8c7-2913d85c9d94',
      Name: 'Automotive Parts & Accessories',
    },
    {
      Id: 'fe4a4023-3dca-4e37-b8f2-67652b99e7de',
      Name: 'Baby',
    },
    {
      Id: 'f73e35a7-70ea-4393-8c5f-54419cb14ec0',
      Name: 'Beauty & Personal Care',
    },
    {
      Id: 'a8003b1c-f326-43fd-92d1-7c78228138f7',
      Name: 'Books',
    },
    {
      Id: 'cdc27507-dbef-4de2-9e70-ed9c245e7ed9',
      Name: 'Cell Phones & Accessories',
    },
    {
      Id: '7390754a-5535-45b0-a83f-0ab872ac7bbe',
      Name: 'Clothing, Shoes and Jewelry',
    },
    {
      Id: '726dba91-9948-4ce2-bb7c-5b1f7edc7bcc',
      Name: 'Collectibles & Fine Art',
    },
    {
      Id: 'dbfdeac4-93ac-46fa-bb0e-14fe84cf5da8',
      Name: 'Computers',
    },
    {
      Id: 'cda88e4d-5397-479b-a6c5-7d0f8eaeb3be',
      Name: 'Electronics',
    },
    {
      Id: '54d57049-1cef-4ff4-9fa1-c956672019b6',
      Name: 'Garden & Outdoor',
    },
    {
      Id: '2bc7108c-fff5-420a-9688-453ff6612883',
      Name: 'Grocery & Gourmet Food',
    },
    {
      Id: 'ac42141f-2879-4e72-8819-9786269de55f',
      Name: 'Handmade',
    },
    {
      Id: 'f4e66fb6-e667-4704-a31e-b10d8251d428',
      Name: 'Health, Household & Baby Care',
    },
    {
      Id: 'dadf57cf-e6c2-4e32-8508-3c1e35a0e9c9',
      Name: 'Home & Kitchen',
    },
    {
      Id: '3156e353-d17d-4e42-b7e3-a665d718dce8',
      Name: 'Industrial & Scientific',
    },
    {
      Id: 'ebda475a-cfa6-4895-9a84-cd40125ab2fc',
      Name: 'Luggage & Travel Gear',
    },
    {
      Id: '9c809e72-4d86-492e-aaca-f4ea01ca4af2',
      Name: 'Movies & TV',
    },
    {
      Id: '97dcf5b1-1f06-4008-9876-a8f697954ae6',
      Name: 'Musical Instruments',
    },
    {
      Id: 'ee3ef48d-f29c-4136-9c25-4a4d27f99fdd',
      Name: 'Office Products',
    },
    {
      Id: 'a19155fa-9c5d-4e13-b8ce-fa0dbf99eb77',
      Name: 'Pet Supplies',
    },
    {
      Id: 'e59e85b4-a372-4afe-afd8-076397051b7a',
      Name: 'Sports & Outdoors',
    },
    {
      Id: '2c6f68ab-2586-4030-b9c3-38ee1a95cb9a',
      Name: 'Tools & Home Improvement',
    },
    {
      Id: 'd9d73bf6-37a7-4b1d-a608-41098e14655a',
      Name: 'Toys & Games',
    },
    {
      Id: 'fd02e249-4b44-4f04-a692-7d70cff443d5',
      Name: 'Video Games',
    },
  ]

  constructor() {}

  ngOnInit(): void {
    this.categoryDropdownSettings = {
      idField: 'Id',
      textField: 'Name',
      enableCheckAll: false,
      itemsShowLimit: 10,
      allowSearchFilter: true,
    }
  }
}
