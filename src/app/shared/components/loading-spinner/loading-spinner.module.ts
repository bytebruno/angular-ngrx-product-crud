import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { LoadingSpinnerComponent } from './loading-spinner.component'
import { loadingReducer } from './state/loading.reducer'
import { loadingFeatureKey } from './state/loading.selectors'

@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [CommonModule, StoreModule.forFeature(loadingFeatureKey, loadingReducer)],
  exports: [LoadingSpinnerComponent],
})
export class LoadingSpinnerModule {}
