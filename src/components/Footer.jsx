import Logo from "../components/assets/footer-logo.png";
import NavLinks from "./NavLinks";

export default function Footer() {
    return (
        <footer>
        <div className="footer-background">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img className="footer-img" src = {Logo} alt = "Little Lemon logo" />
                    </div>
                    <div className="hotline">
                        <div className="section-title">
                            <i className="fa-solid fa-phone fa-lg" />
                            <h1> Reservation Hotline</h1>
                        </div>
                        <div className="section-content">
                            <p>1800 6789</p>
                        </div>
                    </div>
                    <div className="footer-nav">
                        <nav className="footer-nav">
                            <NavLinks />
                        </nav>
                    </div>
                    <div className="address">
                        <div className="section-title">
                            <i class="fa-solid fa-map-location-dot fa-lg"></i>
                            <h1>Address</h1>
                        </div>
                        <div className="section-content">
                            <p>Addresses here</p>
                        </div>
                    </div>
                    <div className="connect">
                        <div className="section-title">
                        <i class="fa-sharp fa-solid fa-address-book fa-lg"></i>
                            <h1>Connect</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    )
}