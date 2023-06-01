import { useEffect } from 'react'

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

  useEffect(() => {
    dispatch(getAllCollections())
  }, [dispatch])

  const usersCollections = registeredUsers.map(({ name }) => ({
    name,
    data: collections.collections
      .filter(({ uid }) => uid === registeredUsers.find((user) => user.name === name)?.uid)
      .map(({ drawingData }) => drawingData.dataURL),
  }))

  console.log(usersCollections)
  console.log('*********', collections.collections)

  return (
    <div className='drawings-list'>
      <h2>All collections</h2>
      <button className='drawings-list-btn' type='button' onClick={() => navigate('/')}>
        Return to canvas
      </button>
      {usersCollections.map((user) => (
        <>
          <p>{user.name}</p>
          {user.data.map((drawing) => (
            <img className='drawing' key={user.name} src={drawing} alt={`Drawing ${drawing}`} />
          ))}
        </>
      ))}
    </div>
  )
}

export default AllCollectionsPage
