import "./footer.css"
function Footer(){
    return(
        <footer>
            <div className="footer">
                <div className="footerText-left">
                    <h4>Visit</h4>
                    <p>123 Main Street, Jaipur</p>  
                </div>
                <div className="footerText-center">
                    <p class="logo">Bar Palladio</p>
                    <p class ="tagline">Jaipur · Est. 2016</p>
                </div>
                <div className="footerText-right">
                    <h4>Contact</h4>
                    <p>Email: info@barpalladio.com</p>
                    <p>Phone: +91 141 234 5678</p>
                </div>
            </div>
            <div className="copyright">
                <p>© 2026 Bar Palladio. All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer