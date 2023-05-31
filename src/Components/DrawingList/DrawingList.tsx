import { useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getDrawings } from '../../features/drawings/DrawingsSlice'

function DrawingsList() {
  const dispatch = useAppDispatch()
  const uid = localStorage.getItem('Auth uid')
  const drawings = useAppSelector((state) => state.drawings.items)

  useEffect(() => {
    if (uid) {
      dispatch(getDrawings(uid))
    }
  }, [dispatch, uid])

  console.log(drawings)

  return (
    <div>
      <h2>My Drawings</h2>
      {drawings.map((drawing) => (
        <img key={drawing.id} src={drawing.dataURL} alt={`Drawing ${drawing.id}`} />
      ))}
    </div>
  )
}

export default DrawingsList
