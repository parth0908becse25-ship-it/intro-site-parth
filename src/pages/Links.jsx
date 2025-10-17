import QRBlock from '../components/QRBlock.jsx'
import MagneticButton from '../components/MagneticButton.jsx'

export default function Links() {
  const data = {
    name: 'PARTH MEHTA',
    phone: '6284839275',
    emails: [
      'parthmehta4706@gmail.com',
      'parth0908.becse2025@chitkara.edu.in',
    ],
    linkedin: 'https://www.linkedin.com/in/parth-mehta-09741438b/',
    github: 'https://github.com/parth0908becse25-ship-it',
    leetcode: 'https://leetcode.com/u/parth0908becse25-ship-it' // adjust if different
  }

  const siteUrl = typeof window !== 'undefined'
    ? window.location.origin
    : 'https://example.com'

  return (
    <div className="page links-page">
      <section className="section contact">
        <h2 className="section-title">Contact</h2>
        <div className="contact-grid">
          <div className="card">
            <div className="label">Name</div>
            <div className="value">{data.name}</div>
          </div>
          <div className="card">
            <div className="label">Phone</div>
            <button className="copy" onClick={() => navigator.clipboard.writeText(data.phone)}>
              {data.phone} — Tap to copy
            </button>
          </div>
          <div className="card">
            <div className="label">Email</div>
            {data.emails.map((e) => (
              <div key={e} className="value">
                <a href={`mailto:${e}`} className="link">{e}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section profiles">
        <h2 className="section-title">Profiles</h2>
        <div className="profile-grid">
          <a className="pill" href={data.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="pill" href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="pill" href={data.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
        </div>
      </section>

      <section id="qr" className="section qr">
        <h2 className="section-title">Share this site</h2>
        <QRBlock value={siteUrl} />
        <div className="qr-actions">
          <button className="pill" onClick={() => navigator.clipboard.writeText(siteUrl)}>
            Copy URL
          </button>
        </div>
      </section>
    </div>
  )
}