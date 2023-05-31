import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import authSliceReducer from '../features/authSlice/authSlice'
import drawingsSliceReducer from '../features/drawings/DrawingsSlice'

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    drawings: drawingsSliceReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
