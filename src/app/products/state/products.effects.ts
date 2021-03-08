import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { ProductsService } from '../products.service'
import { getProducts, getProductsSuccess } from './products.actions'

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProducts),
      mergeMap(() =>
        this.productsService.getProducts().pipe(
          map((products) => getProductsSuccess({ products })),
          catchError(() => EMPTY)
        )
      )
    )
  )

  constructor(private actions$: Actions, private productsService: ProductsService) {}
}
