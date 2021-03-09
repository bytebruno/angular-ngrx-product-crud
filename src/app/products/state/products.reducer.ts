import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store'
import { IProduct } from '../model/product.model'
import { getProductsSuccess } from './products.actions'

export const productsFeatureKey = 'products'

export const initialProductState: IProductState = {
  productsList: [],
}

export const productsReducer = createReducer(
  initialProductState,
  on(getProductsSuccess, (state: IProductState, action) => ({ ...state, productsList: action.products }))
)
export const selectProductsFeature = createFeatureSelector<IProductState>(productsFeatureKey)

export const selectProductsList = createSelector(selectProductsFeature, (state: IProductState) => state.productsList)

export interface IProductState {
  productsList: IProduct[]
}
