import { createAction, props } from '@ngrx/store'

export const getProducts = createAction('[Products] Get Products')
export const getProductsSuccess = createAction('[Products] Get Products Success', props<{ products: any[] }>())
