import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { createUserFetch, LoginFetch, LogOutFetch } from './authAPI'

import { saveUser } from '../allUsers/allUsersAPI'

export interface RegisterUserArgs {
  email: string | null
  password: string | null
}

export interface RegisterUserResponse {
  uid: string | null
  email: string | null
}

export interface UserState {
  user: RegisterUserArgs | RegisterUserResponse | null
  status: 'idle' | 'loading' | 'failed'
  firstEnter: boolean
  isAuth: boolean
}

const initialState: UserState = {
  user: {
    email: '',
    password: '',
    uid: '',
  },
  isAuth: false,
  status: 'idle',
  firstEnter: true,
}

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await createUserFetch({ email, password })()
    console.log(response)
    await saveUser(response.uid || '', response.email || '')
    return response
  },
)

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await LoginFetch({ email, password })()
    localStorage.setItem('Auth uid', response.uid || '')
    console.log(response)
    return response
  },
)

export const logoutUser = createAsyncThunk('auth/logoutUser', () => {
  return LogOutFetch()
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginHandler: (state, action: PayloadAction<RegisterUserArgs | RegisterUserResponse>) => {
      state.user = action.payload
      state.isAuth = true
      console.log('loginHandler', state.user)
    },
    loginCheckStatusHandler: (state) => {
      const uid = localStorage.getItem('Auth uid') || null
      if (uid) {
        state.isAuth = true
      }
    },
    logoutHandler: (state) => {
      state.user = null
      state.isAuth = false
      localStorage.removeItem('Auth uid')
    },
    firstLoadHandler: (state, action: PayloadAction<boolean>) => {
      state.firstEnter = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'idle'
        state.user = action.payload
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = 'failed'
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'idle'
        state.user = action.payload
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = 'failed'
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = 'idle'
        state.user = null
      })
      .addCase(logoutUser.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export const { loginHandler, logoutHandler, firstLoadHandler, loginCheckStatusHandler } = authSlice.actions

export default authSlice.reducer
