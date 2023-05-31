import './App.css'
import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import DrawingsList from './Components/DrawingList/DrawingList'
import ErrorBoundary from './features/ErrorBoundary/ErrorBoundary'
import LoginPage from './pages/LoginPage/LoginPage'
import MainPage from './pages/MainPage/MainPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'

function App() {
  const userUid = localStorage.getItem('Auth uid')
  return (
    <div className='App'>
      <ErrorBoundary>
        <Suspense fallback={<h1> ...</h1>}>
          <BrowserRouter>
            <Routes>
              {userUid ? (
                <>
                  <Route path='/' element={<MainPage />} />
                  <Route path='/register' element={<RegisterPage />} />
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/drawings' element={<DrawingsList />} />
                </>
              ) : (
                <>
                  <Route path='/register' element={<RegisterPage />} />
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/' element={<Navigate replace to='/register' />} />
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
