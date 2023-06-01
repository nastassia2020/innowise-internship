import { SlLogout } from 'react-icons/sl'

import { useAppDispatch, useAppSelector } from '../../app/hooks'

import { logoutHandler, firstLoadHandler } from '../../features/authSlice/authSlice'
import './Header.css'

const Header = () => {
  const { isAuth } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  const authHandler = () => {
    dispatch(logoutHandler())
    // добавила переменную firstload, чтобы при разлогинивании не перекидывал useEffect компонента Sign на страницу login
    dispatch(firstLoadHandler(true))
  }

  return (
    <div className='header'>
      <div className='header_info'>
        <p> Pretty Paint </p>
      </div>
      {isAuth && <SlLogout className='header_exit' onClick={authHandler} />}
    </div>
  )
}

export default Header
