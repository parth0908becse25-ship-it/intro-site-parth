import HeroName from '../components/HeroName.jsx'
import SpotlightCanvas from '../components/SpotlightCanvas.jsx'
import MagneticButton from '../components/MagneticButton.jsx'
import SkillCard from '../components/SkillCard.jsx'

export default function Home() {
  return (
    <div className="page">
      <SpotlightCanvas />
      <section className="section hero">
        <HeroName
          name="PARTH MEHTA"
          tagline="“Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.”"
        />
        <div className="hero-ctas">
          <MagneticButton to="/links" label="Contact & Links" />
          <MagneticButton to="/links#qr" label="Get QR" />
        </div>
      </section>

      <section className="section skills">
        <h2 className="section-title">Skills & Capabilities</h2>
        <div className="grid">
          <SkillCard
            title="Frontend polish"
            points={['CSS/SCSS', 'Responsive layouts', 'Neon micro-interactions']}
          />
          <SkillCard
            title="Creative coding"
            points={['Canvas shaders', 'Parallax', 'Depth & glow']}
          />
          <SkillCard
            title="React expertise"
            points={['Component design', 'Routing', 'Performance']}
          />
          <SkillCard
            title="Interaction design"
            points={['Hover physics', 'Magnetic CTAs', 'Accessible motion']}
          />
        </div>
      </section>

      <section className="section showcase">
        <h2 className="section-title">This site is the demo</h2>
        <ul className="showcase-list">
          <li><span className="dot"></span>Interactive spotlight following cursor/touch</li>
          <li><span className="dot"></span>Animated scan-border around name</li>
          <li><span className="dot"></span>Magnetic buttons with glow ripple</li>
          <li><span className="dot"></span>Mobile-first neon theme with performance guards</li>
        </ul>
      </section>
    </div>
  )
}