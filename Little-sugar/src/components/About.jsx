import './about.css'

function About(){
    function scrollAnimate() {
        const text = document.querySelector(".text")
        const img = document.querySelector(".about-img")
        if((scrollY >100 && scrollY < 600) || scrollY >=850) {
            text.style.transform = `translateX(-${((-(15/600)*scrollY)+15)**2}px)`
            img.style.transform = `translateX(${((-(15/600)*scrollY)+15)**2}px)`
            if ( scrollY >=850) {
                text.style.transform = `translateX(${((-(20/850)*scrollY)+20)**2}px)`
                img.style.transform = `translateX(-${((-(20/850)*scrollY)+20)**2}px)`
            }
        }
    console.log(scrollY)
    }
    window.addEventListener('scroll',scrollAnimate)
    return(
        <section id='about' className='AboutUs'>
            <div className="container">
                <div className="text">
                    <h1 className='title'>Our Story</h1>
                    <p className='story'>We believe a great dessert isn't just about taste — it's about the moment it creates. That pause. That first bite. That look on someone's face. At Little Sugar, everything we make is built around that feeling. Small-batch, handcrafted, made fresh. Because some things are still worth doing the slow way.</p>
                </div>
                <div className="about-img"></div>
            </div>
        </section>
    )
}
export default About