import { createReducer, on } from '@ngrx/store'
import { hideSnackbar, showSnackbar } from './snackbar.action'

export interface ISnackbarState {
  show: boolean
  message: string
  mode: string
}

export const initialSnackbarState: ISnackbarState = {
  show: false,
  message: '',
  mode: 'success',
}

export const snackbarReducer = createReducer(
  initialSnackbarState,
  on(showSnackbar, (state: ISnackbarState, action) => ({
    ...state,
    show: true,
    message: action.message,
    mode: action.mode ? action.mode : 'success',
  })),
  on(hideSnackbar, (state: ISnackbarState, action) => ({
    ...state,
    show: false,
  }))
)
