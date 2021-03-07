import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ProductsListComponent } from './components/products-list/products-list.component'
import { ProductsRoutingModule } from './products-routing.module'

@NgModule({
  declarations: [ProductsListComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
