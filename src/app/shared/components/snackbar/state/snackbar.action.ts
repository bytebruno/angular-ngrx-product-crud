import { createAction, props } from '@ngrx/store'

export const showSnackbarRequest = createAction(
  '[Snackbar] Show Snackbar Request',
  props<{ message: string; mode?: string }>()
)
export const showSnackbar = createAction('[Snackbar] Show Snackbar', props<{ message: string; mode?: string }>())
export const hideSnackbarRequest = createAction('[Snackbar] Hide Snackbar Request')
export const hideSnackbar = createAction('[Snackbar] Hide Snackbar')
