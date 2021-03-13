import { createAction, props } from '@ngrx/store'
import { IProduct } from '../model/product.model'

export const getProducts = createAction('[Products] Get Products')
export const getProductsSuccess = createAction('[Products] Get Products Success', props<{ products: IProduct[] }>())

export const addProductRequest = createAction('[Products] Add Product Request', props<{ product: IProduct }>())
export const addProductSuccess = createAction('[Products] Add Product Success', props<{ product: IProduct }>())

export const deleteProductRequest = createAction('[Products] Delete Product Request', props<{ productId: number }>())
export const deleteProductSuccess = createAction('[Products] Delete Product Success', props<{ productId: number }>())

export const getSelectedProduct = createAction('[Products] Get Selected Product')
export const setSelectedProduct = createAction('[Products] Set Selected Product', props<{ product: IProduct }>())

export const setSelectedProductToSessionStorage = createAction(
  '[Products] Set Selected Product to Session Storage',
  props<{ product: IProduct }>()
)
export const getSelectedProductFromSessionStorage = createAction('[Products] Get Selected Product from Session Storage')
export const clearSelectedProductFromSessionStorage = createAction(
  '[Products] Clear Selected Product from Session Storage'
)
export const getSelectedProductFromSessionStorageSuccess = createAction(
  '[Products] Get Selected Product from Session Storage Success',
  props<{ product: IProduct | null }>()
)
