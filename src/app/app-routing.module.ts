import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductsListComponent } from './products/components/products-list/products-list.component'

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: ProductsListComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
