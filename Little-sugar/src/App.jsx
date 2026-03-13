import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import About from './components/About'
import Menu from './components/menu'

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
    </div>
  )
}

export default App
