import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'
import { RetailersDropdownComponent } from './retailers-dropdown.component'

@NgModule({
  declarations: [RetailersDropdownComponent],
  imports: [CommonModule, NgMultiSelectDropDownModule, ReactiveFormsModule],
  exports: [RetailersDropdownComponent],
})
export class RetailersDropdownModule {}
