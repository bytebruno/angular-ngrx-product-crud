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
      Name: 'Whisky',
    },
    {
      Id: '9f4b3e22-a369-4fb7-9832-cf83f0bc3663',
      Name: 'Scotch',
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
