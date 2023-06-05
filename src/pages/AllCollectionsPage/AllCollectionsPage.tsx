import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getAllCollections } from '../../features/allCollections/AllCollectionsSlice'

import './AllCollectionsPage.css'

export interface StoredUser {
  name: string
  uid: string
}

function AllCollectionsPage() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const collections = useAppSelector((state) => state.userCollections)
  const registeredUsers: StoredUser[] = JSON.parse(localStorage.getItem('users') || '[]')
  const [search, setSearch] = useState('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    dispatch(getAllCollections())
  }, [dispatch])

  const usersCollections = registeredUsers.map(({ name }) => ({
    name,
    data: collections.collections
      .filter(({ uid }) => uid === registeredUsers.find((user) => user.name === name)?.uid)
      .map(({ drawingData }) => drawingData.dataURL),
  }))

  // const usersCollections = collections.collections.map(({ uid }) => ({
  //   uid,
  //   data: collections.collections.map(({ drawingData }) => drawingData.dataURL),
  // }))

  console.log(collections.collections)

  const filteredUsers = usersCollections.filter((user) => user.name.includes(search))

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
              <p key={user.name}>{user.name}</p>
              <div className='drawing-collection'>
                {user.data.slice(-4).map((drawing) => (
                  <img className='drawing' key={user.name} src={drawing} alt={`Drawing ${drawing}`} />
                ))}
              </div>
            </>
          ))
        : usersCollections.map((user) => (
            <>
              <p key={user.name}>{user.name}</p>
              <div className='drawing-collection'>
                {user.data.slice(-4).map((drawing) => (
                  <img className='drawing' key={user.name} src={drawing} alt={`Drawing ${drawing}`} />
                ))}
              </div>
            </>
          ))}
    </div>
  )
}

export default AllCollectionsPage
