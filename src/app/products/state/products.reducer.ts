import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store'
import { getProductsSuccess } from './products.actions'

export const productsFeatureKey = 'products'

export const initialState = {
  productsList: [],
}

export const productsReducer = createReducer(
  initialState,
  on(getProductsSuccess, (state: any, action) => ({ ...state, productsList: action.products }))
)
export const selectProductsFeature = createFeatureSelector<any>(productsFeatureKey)

export const selectProductsList = createSelector(selectProductsFeature, (state: any) => state.productsList)
