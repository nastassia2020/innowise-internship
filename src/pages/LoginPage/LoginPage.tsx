import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../app/hooks'

import { loginUser, loginHandler, loginCheckStatusHandler } from '../../features/authSlice/authSlice'

interface Props {}

const LoginPage: React.FC<Props> = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(loginUser({ email, password }))
    dispatch(loginHandler({ email, password }))
    dispatch(loginCheckStatusHandler(true))
    navigate('/')
    console.log(email, password)
  }

  return (
    <div className='auth'>
      <form className='auth_form' onSubmit={handleSubmit}>
        <label htmlFor='email' title='Email'>
          Email:{' '}
        </label>
        <input
          type='email'
          name='email'
          value={email}
          placeholder='example@domain.com'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password' title='Password'>
          Password:{' '}
        </label>
        <input
          type='password'
          name='password'
          value={password}
          placeholder='Min 6 characters'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit' className='auth_btn'>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
