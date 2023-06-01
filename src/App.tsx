import './App.css'
import { Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from './app/hooks'
import DrawingsList from './Components/DrawingList/DrawingList'
import Header from './Components/Header/Header'
import { loginCheckStatusHandler } from './features/authSlice/authSlice'
import { getDrawings } from './features/drawings/DrawingsSlice'
import ErrorBoundary from './features/ErrorBoundary/ErrorBoundary'
import AllCollectionsPage from './pages/AllCollectionsPage/AllCollectionsPage'
import LoginPage from './pages/LoginPage/LoginPage'
import MainPage from './pages/MainPage/MainPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'

function App() {
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  if (!users.length) {
    localStorage.setItem('users', JSON.stringify([]))
  }
  const { isAuth } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loginCheckStatusHandler(true))
  }, [dispatch])

  return (
    <div className='App'>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<h1> ...</h1>}>
          <BrowserRouter>
            <Routes>
              {isAuth ? (
                <>
                  <Route path='/' element={<MainPage />} />
                  <Route path='/register' element={<RegisterPage />} />
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/drawings' element={<DrawingsList />} />
                  <Route path='/allcollections' element={<AllCollectionsPage />} />
                  {/* <Route path='/' element={<Navigate replace to='/drawings' />} /> */}
                </>
              ) : (
                <>
                  <Route path='/register' element={<RegisterPage />} />
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/' element={<Navigate replace to='/register' />} />
                  <Route path='/drawings' element={<Navigate replace to='/register' />} />
                </>
              )}
            </Routes>
          </BrowserRouter>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App
