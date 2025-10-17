import { useRef } from 'react'

export default function SkillCard({ title, points = [] }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`
    el.style.boxShadow = `${-x * 20}px ${y * 20}px 40px rgba(0,200,255,0.15)`
  }

  const onLeave = () => {
    const el = ref.current
    el.style.transform = `rotateY(0deg) rotateX(0deg)`
    el.style.boxShadow = `0 0 0 rgba(0,0,0,0)`
  }

  return (
    <div className="skill-card" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div ref={ref} className="skill-card-inner">
        <h3 className="skill-title">{title}</h3>
        <ul className="skill-points">
          {points.map((p) => (
            <li key={p}><span className="dot"></span>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}