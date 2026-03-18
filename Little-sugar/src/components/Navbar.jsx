import './Navbar.css'
function Navbar() {
  return (
    <section className='header'>
      <nav className="navbar">
        <a className='logo' href='#'>TLS.</a>
        <ul>
          <li><a href="#about">our Story</a></li>
          <li><a href="#menu">our Sweets</a></li>
          <li><a href="#gallery">a Little look</a></li>
        </ul>
      </nav>
    </section>
  );
}
export default Navbar;