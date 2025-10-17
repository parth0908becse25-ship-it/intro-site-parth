import { Link } from 'react-router-dom'
import { useRef } from 'react'

export default function MagneticButton({ to, label }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `translate(${x * 12}px, ${y * 12}px)`
  }

  const onLeave = () => {
    ref.current.style.transform = `translate(0, 0)`
  }

  return (
    <Link
      to={to}
      className="magnetic"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span ref={ref} className="magnetic-inner">{label}</span>
    </Link>
  )
}