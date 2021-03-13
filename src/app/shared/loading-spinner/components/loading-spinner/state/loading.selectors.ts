import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ILoadingState } from './loading.reducer'

export const loadingFeatureKey = 'loading'

export const selectLoadingFeature = createFeatureSelector<ILoadingState>(loadingFeatureKey)

export const selectLoading = createSelector(selectLoadingFeature, (state: ILoadingState) => state.loading)
