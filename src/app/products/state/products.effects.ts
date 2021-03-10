import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY } from 'rxjs'
import { catchError, map, mergeMap, tap } from 'rxjs/operators'
import { IProduct } from '../model/product.model'
import { ProductsService } from '../products.service'
import {
  getProducts,
  getProductsSuccess,
  getSelectedProductFromSessionStorage,
  getSelectedProductFromSessionStorageSuccess,
  setSelectedProductToSessionStorage,
} from './products.actions'

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProducts),
      mergeMap(() =>
        this.productsService.getProducts().pipe(
          map((products: IProduct[]) => getProductsSuccess({ products })),
          catchError(() => EMPTY)
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

  constructor(private actions$: Actions, private productsService: ProductsService) {}
}
