import './Navbar.css'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <section className='header'>
      <nav className="navbar">
        <a className='logo' href='#'>TLS.</a>
        
        {/* Hamburger Button */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Navigation Menu */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={handleLinkClick}>our Story</a></li>
          <li><a href="#menu" onClick={handleLinkClick}>our Sweets</a></li>
          <li><a href="#gallery" onClick={handleLinkClick}>a Little look</a></li>
        </ul>
      </nav>
    </section>
  );
}
export default Navbar;