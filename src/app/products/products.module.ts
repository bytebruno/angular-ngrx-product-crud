import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ProductCardComponent } from './components/product-card/product-card.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { ProductsListComponent } from './components/products-list/products-list.component'
import { ProductsRoutingModule } from './products-routing.module'
import { ProductsEffects } from './state/products.effects'
import { productsReducer } from './state/products.reducer'
import { productsFeatureKey } from './state/products.selectors'

@NgModule({
  declarations: [ProductsListComponent, ProductCardComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature(productsFeatureKey, productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
})
export class ProductsModule {}
