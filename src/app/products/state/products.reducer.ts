import { createReducer, on } from '@ngrx/store'
import { IProduct } from '../model/product.model'
import {
  addProductSuccess,
  deleteProductSuccess,
  getOneProductSuccess,
  getProductsSuccess,
  getSelectedProductFromSessionStorageSuccess,
  setProductToEdit,
  setSelectedProduct,
} from './products.actions'

export interface IProductState {
  productsList: IProduct[]
  selectedProduct: IProduct | null
  productToEdit: IProduct | null
}

export const initialProductState: IProductState = {
  productsList: [],
  selectedProduct: null,
  productToEdit: null,
}

export const productsReducer = createReducer(
  initialProductState,
  on(getProductsSuccess, (state: IProductState, action) => ({ ...state, productsList: action.products })),
  on(addProductSuccess, (state: IProductState, action) => ({
    ...state,
    productsList: [...state.productsList, action.product],
  })),
  on(getOneProductSuccess, (state: IProductState, action) => ({
    ...state,
    selectedProduct: action.product,
  })),
  on(setProductToEdit, (state: IProductState, action) => ({
    ...state,
    productToEdit: action.product,
  })),

  on(deleteProductSuccess, (state: IProductState, action) => ({
    ...state,
    selectedProduct: null,
    productsList: state.productsList.filter((p) => p.id !== action.productId),
  })),
  on(setSelectedProduct, (state: IProductState, action) => ({ ...state, selectedProduct: action.product })),
  on(getSelectedProductFromSessionStorageSuccess, (state: IProductState, action) => ({
    ...state,
    selectedProduct: action.product,
  }))
)
