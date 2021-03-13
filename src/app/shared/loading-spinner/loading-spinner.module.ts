import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component'
import { loadingReducer } from './components/loading-spinner/state/loading.reducer'
import { loadingFeatureKey } from './components/loading-spinner/state/loading.selectors'

@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [CommonModule, StoreModule.forFeature(loadingFeatureKey, loadingReducer)],
  exports: [LoadingSpinnerComponent],
})
export class LoadingSpinnerModule {}
