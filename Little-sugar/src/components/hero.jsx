import './hero.css'
import { useEffect } from 'react'
function Hero() {
    

    function move() {
      const LS = document.querySelector(".LS")
    const AS = document.querySelector(".AS")
    const img = document.querySelector(".hero-image")
      LS.style.filter = `blur(0px)`
      LS.style.transform = `translateY(-${scrollY /1.5}px)`
      AS.style.transform = `translateY(-${(scrollY /2.5) + 30}px)`
      img.style.height = `${430 - (scrollY / 1.5)}px`
      img.style.borderRadius = `${10 + (scrollY/25)}px`
    }

    window.addEventListener('scroll', move, { passive: true })
  
    
    return (
        <section className="hero">
            <div className='hero-text'>
                <h1 className='LS'>Little Sugar</h1>
                <h2 className='AS'>Artisan Bakery</h2>
            </div>
            <div className='hero-image'></div>
        </section>
    );
}
export default Hero;