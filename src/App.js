import React, { useEffect, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Header } from './components/Header';
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { Sign } from './pages/Sign/Sign.js';
import { PageNotFound } from './pages/PageNotFound.js';
import { loginCheckStatusHandler } from './store/actions/actions';
import { fetchTasks } from './store/actions/actions';

import './App.css';

function App() {
  const { isAuth, token, isError } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginCheckStatusHandler());
  }, [dispatch, isAuth]);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchTasks());
    }
  });

  return (
    <div className="app">
      <Header />
      <ErrorBoundary className="error">
        <Suspense fallback={<h1> ...</h1>}>
          <div className="app-content">
            <Routes>
              {isAuth ? (
                <>
                  <Route path="/" element={<Main />} />
                  <Route path="*" element={<PageNotFound />} />
                  <Route path="/login" element={<Navigate replace to="/" />} />
                  <Route path="/sign" element={<Navigate replace to="/" />} />
                </>
              ) : (
                <>
                  <Route path="/sign" element={<Sign />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Navigate replace to="/sign" />} />
                  <Route path="*" element={<PageNotFound />} />
                </>
              )}
            </Routes>
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
