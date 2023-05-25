import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../app/hooks'

import { registerUser } from '../../features/authSlice/authSlice'
import './RegisterPage.css'

interface Props {}

const RegisterPage: React.FC<Props> = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(registerUser({ email, password }))
    navigate('/login')
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
          Register
        </button>
        <button onClick={() => navigate('/login')} type='button' className='auth_btn'>
          Login
        </button>
        <p> Press here if you already have an account</p>
      </form>
    </div>
  )
}

export default RegisterPage
