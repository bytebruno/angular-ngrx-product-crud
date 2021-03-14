import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'
import { SnackbarComponent } from './snackbar.component'
import { snackbarReducer } from './state/snackbar.reducer'
import { snackbarFeatureKey } from './state/snackbar.selector'

@NgModule({
  declarations: [SnackbarComponent],
  imports: [CommonModule, BrowserAnimationsModule, StoreModule.forFeature(snackbarFeatureKey, snackbarReducer)],
  exports: [SnackbarComponent],
})
export class SnackbarModule {}
