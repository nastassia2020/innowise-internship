import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import authSliceReducer from '../features/authSlice/authSlice'
import counterSliceReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    counter: counterSliceReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
