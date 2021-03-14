import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { CategoriesDropdownModule } from '../shared/components/categories-dropdown/categories-dropdown.module'
import { RetailersDropdownModule } from '../shared/components/retailers-dropdown/retailers-dropdown.module'
import { ProductCardComponent } from './components/product-card/product-card.component'
import { ProductCreateComponent } from './components/product-create/product-create.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { ProductsListComponent } from './components/products-list/products-list.component'
import { ProductsRoutingModule } from './products-routing.module'
import { ProductsEffects } from './state/products.effects'
import { productsReducer } from './state/products.reducer'
import { productsFeatureKey } from './state/products.selectors'

@NgModule({
  declarations: [ProductsListComponent, ProductCardComponent, ProductDetailComponent, ProductCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    StoreModule.forFeature(productsFeatureKey, productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
    ReactiveFormsModule,
    CategoriesDropdownModule,
    RetailersDropdownModule,
  ],
})
export class ProductsModule {}
