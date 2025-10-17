import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Links from './pages/Links.jsx'

export default function App() {
  const location = useLocation()
  return (
    <div className="app">
      <nav className="nav">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/links" className={`nav-link ${location.pathname === '/links' ? 'active' : ''}`}>Links</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </div>
  )
}