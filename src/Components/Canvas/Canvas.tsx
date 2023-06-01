import React, { useState, useEffect, useCallback } from 'react'

import { saveDrawing } from '../../features/drawings/drawingsApi'
import './Canvas.css'

export interface DrawingData {
  dataURL: string
  id?: string
}

const Canvas = ({
  width,
  height,
  design,
  strokeStyle,
  lineWidth,
}: {
  width: number
  height: number
  design: string
  strokeStyle: string
  lineWidth: number
}) => {
  const [isDrawing, setIsDrawing] = useState(false)
  const [drawingMode, setDrawingMode] = useState<
    'straight line' | 'line' | 'brush' | 'circle' | 'rectangle' | 'triangle'
  >('line')
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null)

  const handleCanvasMouseMove = useCallback(
    (event: MouseEvent) => {
      const canvas = canvasRef
      if (!canvas || !isDrawing) {
        return
      }

      const context = canvas.getContext('2d')
      if (!context) {
        return
      }

      const x = event.offsetX
      const y = event.offsetY

      if (drawingMode === 'line') {
        context.strokeStyle = strokeStyle
        context.lineWidth = lineWidth
        context.beginPath()
        context.moveTo(startPos.x, startPos.y)
        context.lineTo(x, y)
        context.stroke()
        setStartPos({ x, y })
      } else if (drawingMode === 'brush') {
        context.fillStyle = strokeStyle
        context.fillRect(x - 5, y - 5, lineWidth, lineWidth)
        context.fill()
      }
    },
    [canvasRef, drawingMode, isDrawing, lineWidth, startPos.x, startPos.y, strokeStyle],
  )

  const handleCanvasMouseDown = useCallback((event: MouseEvent) => {
    setStartPos({ x: event.offsetX, y: event.offsetY })
    setIsDrawing(true)
  }, [])

  const handleCanvasMouseUp = useCallback(
    (event: MouseEvent) => {
      setIsDrawing(false)
      const canvas = canvasRef
      const x = event.offsetX
      const y = event.offsetY
      if (!canvas) {
        return
      }

      const context = canvas.getContext('2d')
      if (!context) {
        return
      }

      if (drawingMode === 'straight line') {
        context.strokeStyle = strokeStyle
        context.lineWidth = lineWidth
        context.beginPath()
        context.moveTo(startPos.x, startPos.y)
        context.lineTo(x, y)
        context.stroke()
        setStartPos({ x, y })
      } else if (drawingMode === 'circle') {
        const r = Math.sqrt(Math.pow(startPos.x - event.offsetX, 2) + Math.pow(startPos.y - event.offsetY, 2))
        context.beginPath()
        context.arc(startPos.x, startPos.y, r, 0, 2 * Math.PI, false)
        context.strokeStyle = strokeStyle
        context.lineWidth = lineWidth
        context.stroke()
      } else if (drawingMode === 'rectangle') {
        const x = Math.min(event.offsetX, startPos.x)
        const y = Math.min(event.offsetY, startPos.y)
        const width = Math.abs(event.offsetX - startPos.x)
        const height = Math.abs(event.offsetY - startPos.y)
        context.strokeStyle = strokeStyle
        context.lineWidth = lineWidth
        context.strokeRect(x, y, width, height)
      } else if (drawingMode === 'triangle') {
        context.beginPath()
        context.moveTo((startPos.x + event.offsetX) / 2, startPos.y)
        context.lineTo(event.offsetX, event.offsetY)
        context.lineTo(startPos.x, event.offsetY)
        context.closePath()
        context.strokeStyle = strokeStyle
        context.lineWidth = lineWidth
        context.stroke()
      }
    },
    [canvasRef, drawingMode, setIsDrawing, startPos.x, startPos.y, lineWidth, strokeStyle],
  )

  useEffect(() => {
    const canvas = canvasRef
    if (!canvas) {
      return
    }

    canvas.addEventListener('mousedown', handleCanvasMouseDown)
    canvas.addEventListener('mouseup', handleCanvasMouseUp)
    canvas.addEventListener('mousemove', handleCanvasMouseMove)

    return () => {
      canvas.removeEventListener('mousedown', handleCanvasMouseDown)
      canvas.removeEventListener('mouseup', handleCanvasMouseUp)
      canvas.removeEventListener('mousemove', handleCanvasMouseMove)
    }
  }, [canvasRef, handleCanvasMouseDown, handleCanvasMouseUp, handleCanvasMouseMove])

  const canvasStyle = { cursor: drawingMode === 'brush' ? 'pointer' : 'crosshair' }

  const uid = localStorage.getItem('Auth uid')

  async function handleSaveDrawing() {
    // Get the drawing data from the canvas
    const drawingData = canvasRef?.toDataURL()

    // Save the drawing to Firebase
    if (drawingData) {
      const drawingId = await saveDrawing(uid, { dataURL: drawingData })

      console.log(`Drawing saved with ID ${drawingId}`)
    }

    console.log('drawingData', drawingData)
  }

  return (
    <>
      <canvas ref={setCanvasRef} width={width} height={height} className={design} style={canvasStyle} />
      <button className='save-image-btn' type='button' onClick={handleSaveDrawing}>
        SAVE IMAGE
      </button>
      <form className='canvas-form'>
        <p>Choose drawing option:</p>
        <label>
          <input
            type='radio'
            name='drawing-mode'
            value='line'
            checked={drawingMode === 'line'}
            onChange={() => setDrawingMode('line')}
          />
          Line
        </label>
        <label>
          <input
            type='radio'
            name='drawing-mode'
            value='brush'
            checked={drawingMode === 'brush'}
            onChange={() => setDrawingMode('brush')}
          />
          Brush
        </label>
        <label>
          <input
            type='radio'
            name='drawing-mode'
            value='straight line'
            checked={drawingMode === 'straight line'}
            onChange={() => setDrawingMode('straight line')}
          />
          Straight line
        </label>
        <label>
          <input
            type='radio'
            name='drawing-mode'
            value='circle'
            checked={drawingMode === 'circle'}
            onChange={() => setDrawingMode('circle')}
          />
          Circle
        </label>
        <label>
          <input
            type='radio'
            name='drawing-mode'
            value='rectangle'
            checked={drawingMode === 'rectangle'}
            onChange={() => setDrawingMode('rectangle')}
          />
          Rectangle
        </label>
        <label>
          <input
            type='radio'
            name='drawing-mode'
            value='triangle'
            checked={drawingMode === 'triangle'}
            onChange={() => setDrawingMode('triangle')}
          />
          Triangle
        </label>
      </form>
    </>
  )
}

export default Canvas
