import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { createUserFetch, LoginFetch, LogOutFetch } from './authAPI'

export interface RegisterUserArgs {
  email: string | null
  password: string | null
}

export interface RegisterUserResponse {
  uid: string | null
  email: string | null
}

export interface UserState {
  login: string | null
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
  login: '',
  isAuth: false,
  status: 'idle',
  firstEnter: true,
}

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ login, email, password }: { login: string; email: string; password: string }) => {
    const response = await createUserFetch({ email, password })()
    console.log(response)
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    users.push({ name: login, uid: response.uid })
    localStorage.setItem('users', JSON.stringify(users))
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
    registerUserHandler: (state, action: PayloadAction<string>) => {
      state.login = action.payload
    },
    loginHandler: (state, action: PayloadAction<RegisterUserArgs | RegisterUserResponse>) => {
      state.user = action.payload
      state.isAuth = true
      console.log('loginHandler', state.user)
    },
    loginCheckStatusHandler: (state, action: PayloadAction<boolean>) => {
      const user = localStorage.getItem('Auth uid') || ''
      if (user) {
        state.isAuth = action.payload
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

export const { loginHandler, logoutHandler, firstLoadHandler, registerUserHandler, loginCheckStatusHandler } =
  authSlice.actions

export default authSlice.reducer
