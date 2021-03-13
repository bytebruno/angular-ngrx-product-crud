import { createReducer, on } from '@ngrx/store'
import { IProduct } from '../model/product.model'
import {
  addProductSuccess,
  getProductsSuccess,
  getSelectedProductFromSessionStorageSuccess,
  setSelectedProduct,
} from './products.actions'

export interface IProductState {
  productsList: IProduct[]
  selectedProduct: IProduct | null
}

export const initialProductState: IProductState = {
  productsList: [],
  selectedProduct: null,
}

export const productsReducer = createReducer(
  initialProductState,
  on(getProductsSuccess, (state: IProductState, action) => ({ ...state, productsList: action.products })),
  on(addProductSuccess, (state: IProductState, action) => ({
    ...state,
    productsList: [...state.productsList, action.product],
  })),
  on(setSelectedProduct, (state: IProductState, action) => ({ ...state, selectedProduct: action.product })),
  on(getSelectedProductFromSessionStorageSuccess, (state: IProductState, action) => ({
    ...state,
    selectedProduct: action.product,
  }))
)
