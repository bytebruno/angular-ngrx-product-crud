import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { ProductsListComponent } from './components/products-list/products-list.component'

const productsRoutes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'product', component: ProductDetailComponent },
]

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
