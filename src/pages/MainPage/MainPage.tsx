import { useState } from 'react'

import Canvas from '../../Components/Canvas/Canvas'
import './MainPage.css'

const MainPage = () => {
  const [strokeStyle, setStrokeStyle] = useState('#000000')
  const [lineWidth, setLineWidth] = useState(1)

  return (
    <div className='main-page'>
      <Canvas width={1000} height={600} design={'canvas'} lineWidth={lineWidth} strokeStyle={strokeStyle} />
      <form>
        <label htmlFor='color' title='Color'>
          Color
        </label>
        <input
          type='color'
          name='color'
          onChange={(e) => setStrokeStyle(e.target.value)}
          placeholder='Choose your color'
        />
        <label htmlFor='lineWidth'>Choose line Width: </label>
        <input
          type='range'
          name='lineWidth'
          id='lineWidth'
          min='1'
          max='10'
          step='1'
          value={lineWidth}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const value = parseInt(event.target.value, 10)
            setLineWidth(value)
          }}
        />
        <output className='price-output' htmlFor='lineWidth'>
          {lineWidth}
        </output>
      </form>
    </div>
  )
}

export default MainPage
