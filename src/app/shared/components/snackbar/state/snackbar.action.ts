import { createAction, props } from '@ngrx/store'

export const showSnackbar = createAction('[Snackbar] Show Snackbar', props<{ message: string; mode?: string }>())
export const hideSnackbar = createAction('[Snackbar] Hide Snackbar')
