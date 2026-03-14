import { useState , useEffect} from 'react'
import './App.css'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import About from './components/About'
import Menu from './components/menu'
import Footer from './components/Footer'
import Gallery from './components/gallery'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,        // scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing curve
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy() // cleanup
    }, [])
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
