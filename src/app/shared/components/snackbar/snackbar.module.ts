import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { SnackbarComponent } from './snackbar.component'
import { SnackbarEffects } from './state/snackbar.effects'
import { snackbarReducer } from './state/snackbar.reducer'
import { snackbarFeatureKey } from './state/snackbar.selector'

@NgModule({
  declarations: [SnackbarComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    StoreModule.forFeature(snackbarFeatureKey, snackbarReducer),
    EffectsModule.forFeature([SnackbarEffects]),
  ],
  exports: [SnackbarComponent],
})
export class SnackbarModule {}
