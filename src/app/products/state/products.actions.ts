import { createAction, props } from '@ngrx/store'
import { IProduct } from '../model/product.model'

export const getProducts = createAction('[Products] Get Products')
export const getProductsSuccess = createAction('[Products] Get Products Success', props<{ products: IProduct[] }>())
