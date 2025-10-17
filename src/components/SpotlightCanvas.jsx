import { useEffect, useRef } from 'react'

export default function SpotlightCanvas() {
  const ref = useRef(null)
  const pos = useRef({ x: 0.5, y: 0.5, vx: 0, vy: 0 })

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d', { alpha: false })

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const palette = {
      bg: '#0a0f1f',
      gradA: 'rgba(0, 255, 200, 0.08)',
      gradB: 'rgba(255, 0, 180, 0.08)',
      light: 'rgba(0, 200, 255, 0.18)'
    }

    let last = performance.now()

    const draw = (t) => {
      const dt = Math.min(0.05, (t - last) / 1000)
      last = t

      // Velocity decay for subtle trailing
      pos.current.vx *= 0.7
      pos.current.vy *= 0.7
      pos.current.x += pos.current.vx * dt
      pos.current.y += pos.current.vy * dt

      const x = pos.current.x * canvas.width
      const y = pos.current.y * canvas.height

      // Background
      ctx.fillStyle = palette.bg
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Neon gradient backdrop
      const g = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      g.addColorStop(0, palette.gradA)
      g.addColorStop(1, palette.gradB)
      ctx.fillStyle = g
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Spotlight radial gradient
      const radius = Math.max(canvas.width, canvas.height) * 0.35
      const rg = ctx.createRadialGradient(x, y, 0, x, y, radius)
      rg.addColorStop(0, palette.light)
      rg.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.globalCompositeOperation = 'lighter'
      ctx.fillStyle = rg
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
      ctx.globalCompositeOperation = 'source-over'

      requestAnimationFrame(draw)
    }

    const onMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY
      const nx = clientX / window.innerWidth
      const ny = clientY / window.innerHeight
      pos.current.vx += (nx - pos.current.x) * 10
      pos.current.vy += (ny - pos.current.y) * 10
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('touchmove', onMove, { passive: true })

    requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
    }
  }, [])

  return <canvas className="spotlight" ref={ref} />
}