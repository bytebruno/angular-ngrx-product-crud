import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { delay, map, mergeMap } from 'rxjs/operators'
import { hideSnackbar, hideSnackbarRequest, showSnackbar, showSnackbarRequest } from './snackbar.action'

@Injectable()
export class SnackbarEffects {
  showSnackbar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(showSnackbarRequest),
      mergeMap((action) => [showSnackbar({ message: action.message, mode: action.mode }), hideSnackbarRequest()])
    )
  )

  hideSnackbar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(hideSnackbarRequest),
      delay(3000),
      map(() => hideSnackbar())
    )
  )

  constructor(private actions$: Actions) {}
}
