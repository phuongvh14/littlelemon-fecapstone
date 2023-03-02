import { NavLink } from "react-router-dom";

export default function NavLinks() {
    return (
        <ul>
            <li><NavLink to="/" activeClassName="active" className={"nav-link"}>Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active" className={"nav-link"}>About Us</NavLink></li>
            <li><NavLink to="/menu" activeClassName="active" className={"nav-link"}>Our Menu</NavLink></li>
            <li><NavLink to="/order" activeClassName="active" className={"nav-link"}>Order Online</NavLink></li>
            <li><NavLink to="/reserve" activeClassName="active" className={"nav-link"}>Reservations</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active" className={"nav-link"}>Contact</NavLink></li>
        </ul>
    )
}