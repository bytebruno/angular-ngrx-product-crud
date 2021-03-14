import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY } from 'rxjs'
import { catchError, map, mergeMap, tap } from 'rxjs/operators'
import { setLoading } from '../../shared/components/loading-spinner/state/loading.action'
import { IProduct } from '../model/product.model'
import { ProductsService } from '../products.service'
import {
  addProductRequest,
  addProductSuccess,
  clearSelectedProductFromSessionStorage,
  deleteProductRequest,
  deleteProductSuccess,
  getOneProductRequest,
  getProducts,
  getProductsSuccess,
  getSelectedProductFromSessionStorage,
  getSelectedProductFromSessionStorageSuccess,
  setProductToEdit,
  setSelectedProductToSessionStorage,
  updateProductRequest,
  updateProductSuccess,
} from './products.actions'

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProducts),
      mergeMap(() =>
        this.productsService.getAll().pipe(
          mergeMap((products: IProduct[]) => [getProductsSuccess({ products }), setLoading({ loading: false })]),
          catchError(() => EMPTY)
        )
      )
    )
  )

  getOne$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOneProductRequest),
      mergeMap((action) =>
        this.productsService.getOne(action.productId).pipe(
          mergeMap((product: IProduct) => [setProductToEdit({ product }), setLoading({ loading: false })]),
          catchError(() => EMPTY)
        )
      )
    )
  )

  addProductRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addProductRequest),
      mergeMap((action) =>
        this.productsService.add(action.product).pipe(
          map((newProduct) => addProductSuccess({ product: newProduct })),
          catchError((err) => {
            console.log(err)
            return EMPTY
          })
        )
      )
    )
  )

  updateProductRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProductRequest),
      mergeMap((action) =>
        this.productsService.update(action.product).pipe(
          map((updatedProduct) => {
            debugger
            return updateProductSuccess({ product: updatedProduct })
          }),
          catchError((err) => {
            console.log(err)
            return EMPTY
          })
        )
      )
    )
  )

  deleteProductRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProductRequest),
      mergeMap((action) =>
        this.productsService.delete(action.productId).pipe(
          mergeMap(() => [
            clearSelectedProductFromSessionStorage(),
            deleteProductSuccess({ productId: action.productId }),
          ]),
          catchError((err) => {
            console.log(err)
            return EMPTY
          })
        )
      )
    )
  )

  setSelectedProductFromSessionStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setSelectedProductToSessionStorage),
        tap((action) => this.productsService.setSelectedProductToSessionStorage(action.product)),
        catchError(() => EMPTY)
      ),
    { dispatch: false }
  )

  getSelectedProductFromSessionStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSelectedProductFromSessionStorage),
      mergeMap(() =>
        this.productsService.getSelectedProductFromSessionStorage().pipe(
          map((product: IProduct | null) => getSelectedProductFromSessionStorageSuccess({ product })),
          catchError(() => EMPTY)
        )
      )
    )
  )

  clearSelectedProductFromSessionStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(clearSelectedProductFromSessionStorage),
        tap((action) => this.productsService.clearSelectedProductFromSessionStorage()),
        catchError(() => EMPTY)
      ),
    { dispatch: false }
  )

  constructor(private actions$: Actions, private productsService: ProductsService) {}
}
