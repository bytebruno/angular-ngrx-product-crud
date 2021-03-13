import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductCreateComponent } from './components/product-create/product-create.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { ProductsListComponent } from './components/products-list/products-list.component'

const productsRoutes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'detail', component: ProductDetailComponent },
  { path: 'product', component: ProductCreateComponent },
]

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
