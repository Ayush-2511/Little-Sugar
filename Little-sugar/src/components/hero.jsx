import './hero.css'

function Hero() {
    function move(){
        const LS = document.querySelector(".LS")
        const AS = document.querySelector(".AS")
        const img = document.querySelector(".hero-image")
        LS.style.transform = `translateY(0px)`;
        AS.style.transform = `translateY(0px)`
        LS.style.filter = `blur(0px)`
        LS.style.transform = `translateY(-${scrollY/2}px)`;
        AS.style.transform = `translateY(-${(scrollY)/2}px)`
        // img.style.backgroundPositionY = `${scrollY+800}px`
        img.style.height = `${430-(scrollY/5)}px`
    }
    window.addEventListener('scroll', move);
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