import { createReducer, on } from '@ngrx/store'
import { setLoading } from './loading.action'

export interface ILoadingState {
  loading: boolean
}

export const initialLoadingState: ILoadingState = {
  loading: false,
}

export const loadingReducer = createReducer(
  initialLoadingState,
  on(setLoading, (state: ILoadingState, action) => ({ ...state, loading: action.loading }))
)
