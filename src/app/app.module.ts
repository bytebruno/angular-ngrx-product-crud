import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductsModule } from './products/products.module'
import { LoadingSpinnerModule } from './shared/components/loading-spinner/loading-spinner.module'
import { SnackbarModule } from './shared/components/snackbar/snackbar.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingSpinnerModule,
    SnackbarModule,
    ProductsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
