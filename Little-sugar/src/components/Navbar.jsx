import { useState } from 'react';
import './Navbar.css'
function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <section className='header'>
      <nav className="navbar">
        <a className='logo' href='#'>TLS.</a>
        <ul className='nav-links'>
          <li><a href="#about">our Story</a></li>
          <li><a href="#menu">our Sweets</a></li>
          <li><a href="#gallery">a Little look</a></li>
        </ul>

        <button className='hamburger' onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>

      </nav>

      <div className={`mobile-menu ${open ? 'open' : 'closed'}`}>
        <a href="#about">our Story</a>
        <a href="#menu">our Sweets</a>
        <a href="#gallery">a Little look</a>
      </div>
    </section>
  );
}
export default Navbar;