import { createAction, props } from '@ngrx/store'

export const setLoading = createAction('[Products] Set Loading', props<{ loading: boolean }>())
