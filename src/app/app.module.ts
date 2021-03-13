import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductsModule } from './products/products.module'
import { LoadingSpinnerModule } from './shared/loading-spinner/loading-spinner.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingSpinnerModule,
    ProductsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
