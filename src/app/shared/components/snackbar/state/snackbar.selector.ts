import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ISnackbarState } from './snackbar.reducer'

export const snackbarFeatureKey = 'snackbar'

export const selectSnackbarFeature = createFeatureSelector<ISnackbarState>(snackbarFeatureKey)

export const selectSnackbar = createSelector(selectSnackbarFeature, (state: ISnackbarState) => state)
