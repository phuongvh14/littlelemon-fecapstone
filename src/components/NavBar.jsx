import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavLinks from "./NavLinks";
import Logo from "../components/assets/logo.svg";


export default function NavBar() {
    const [open, setOpen] = useState(false)
    const handleToggle = () => setOpen(!open)

    return (
        <>
        <header className="header-container">
            <div className="header-wrapper">
                <div className="image-wrapper">
                    <NavLink to="/">
                    {<img className="nav-logo" src = {Logo} alt = "Little Lemon logo" />}
                    </NavLink>
                </div>

                <button onClick={handleToggle} className="burger-icon">
                    {open? <i class="fa-solid fa-xmark fa-2xl"></i> : <i class="fa-solid fa-bars fa-2xl"></i>}
                </button>

                <nav className="nav-links">
                    <NavLinks />
                </nav>
            </div>
        </header>
        <div className="mobile-nav">
            {open? <NavLinks /> : ""}
        </div>
        </>
    )
}