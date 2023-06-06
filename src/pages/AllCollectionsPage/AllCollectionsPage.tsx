import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getAllCollections } from '../../features/allCollections/AllCollectionsSlice'
import { getAllUsers } from '../../features/allUsers/allUsersSlice'

import './AllCollectionsPage.css'

export interface StoredUser {
  email: string
  uid: string
}

function AllCollectionsPage() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const collections = useAppSelector((state) => state.userCollections)
  const usersFromDB = useAppSelector((state) => state.users)
  const [search, setSearch] = useState('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    dispatch(getAllCollections())
    dispatch(getAllUsers())
  }, [dispatch])

  console.log('usersFromDB******* ', usersFromDB)

  const usersCollections = usersFromDB.users.map(({ email }) => ({
    email,
    data: collections.collections
      .filter(({ uid }) => uid === usersFromDB.users.find((user) => user.email === email)?.uid)
      .map(({ drawingData }) => drawingData.dataURL),
  }))

  console.log(collections.collections)

  const filteredUsers = usersCollections.filter((user) => user.email.includes(search))

  return (
    <div className='drawings-list'>
      <h2>All collections</h2>
      <button className='drawings-list-btn' type='button' onClick={() => navigate('/')}>
        Return to canvas
      </button>
      <input
        type='text'
        title='search'
        placeholder='Enter user name'
        onChange={changeHandler}
        className='search-input'
      />

      {search.length && filteredUsers
        ? filteredUsers.map((user) => (
            <>
              <p key={user.email}>{user.email}</p>
              <div className='drawing-collection'>
                {user.data.slice(-4).map((drawing) => (
                  <img className='drawing' key={user.email} src={drawing} alt={`Drawing ${drawing}`} />
                ))}
              </div>
            </>
          ))
        : usersCollections.map((user) => (
            <>
              <p key={user.email}>{user.email}</p>
              <div className='drawing-collection'>
                {user.data.slice(-4).map((drawing) => (
                  <img className='drawing' key={user.email} src={drawing} alt={`Drawing ${drawing}`} />
                ))}
              </div>
            </>
          ))}
    </div>
  )
}

export default AllCollectionsPage
