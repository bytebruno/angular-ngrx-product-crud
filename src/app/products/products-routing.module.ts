import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';

const productsRoutes: Routes = [{ path: 'products', component: ProductsListComponent }];

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
