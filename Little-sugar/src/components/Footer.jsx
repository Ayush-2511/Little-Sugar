import "./footer.css"
function Footer(){
    return(
        <footer>
            <div className="footer">
                <h1 className="Name">Little Sugar</h1>
                <div className="links">
                    <a href="#">Home</a>
                    <a href="#about">About us</a>
                    <a href="#menu">Menu</a>
                    <a href="#gallery">Gallery</a>
                </div>
                <div className="find"><p>920 Shekhupura, Vikas Nagar, Lucknow</p>
                <p>Follow us => @littlesugarbakes</p></div>
            </div>
            <div className="copyright">
                <p>© 2026 The Little Sugar | Artisian Bakery. All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer