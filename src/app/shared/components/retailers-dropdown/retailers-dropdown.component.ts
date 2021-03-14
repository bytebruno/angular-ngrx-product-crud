import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { ControlContainer, FormGroupDirective, FormGroupName } from '@angular/forms'
import { IProductRetailer } from 'src/app/products/model/product.model'

@Component({
  selector: 'app-retailers-dropdown',
  templateUrl: './retailers-dropdown.component.html',
  styleUrls: ['./retailers-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupName,
    },
  ],
})
export class RetailersDropdownComponent implements OnInit {
  @Input() controlName: string = ''
  @Input() formGroup: string = ''

  retailerDropdownSettings = {}

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

  constructor(private parentForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.retailerDropdownSettings = {
      singleSelection: true,
      idField: 'Id',
      textField: 'Name',
      enableCheckAll: false,
      itemsShowLimit: 10,
      allowSearchFilter: true,
      closeDropDownOnSelection: true,
    }
  }
}
