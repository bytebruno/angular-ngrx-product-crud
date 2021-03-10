import { createFeatureSelector, createSelector } from '@ngrx/store'
import { IProductState } from './products.reducer'

export const productsFeatureKey = 'products'

export const selectProductsFeature = createFeatureSelector<IProductState>(productsFeatureKey)

export const selectProductsList = createSelector(selectProductsFeature, (state: IProductState) => state.productsList)
export const selectedProduct = createSelector(selectProductsFeature, (state: IProductState) => state.selectedProduct)
