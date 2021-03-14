import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'
import { CategoriesDropdownComponent } from './categories-dropdown.component'

@NgModule({
  declarations: [CategoriesDropdownComponent],
  imports: [CommonModule, NgMultiSelectDropDownModule, ReactiveFormsModule],
  exports: [CategoriesDropdownComponent],
})
export class CategoriesDropdownModule {}
