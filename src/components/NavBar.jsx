import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import Logo from "../components/assets/logo.svg";

export default function NavBar() {
    return (
        <>
        <header className="header-container">
            <div className="header-wrapper">
                <div className="image-wrapper">
                    <NavLink to="/">
                    {<img className="nav-logo" src = {Logo} alt = "Little Lemon logo" />}
                    </NavLink>
                </div>

                <nav className="nav-links">
                    <NavLinks />
                </nav>
            </div>

        </header>
        </>
    )
}