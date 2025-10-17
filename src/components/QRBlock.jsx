import { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'

export default function QRBlock({ value }) {
  const canvasRef = useRef(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    QRCode.toCanvas(canvas, value, {
      width: 200,
      margin: 2,
      color: {
        dark: '#00e5ff',
        light: '#0a0f1f'
      }
    }, (err) => {
      if (err) setError('Failed to render QR')
    })
  }, [value])

  return (
    <div className="qr-block">
      <canvas ref={canvasRef} />
      {error && <div className="error">{error}</div>}
      <div className="qr-caption">{value}</div>
    </div>
  )
}