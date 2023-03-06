import React, { useState } from "react";
import NavLinks from "./NavLinks";


export default function MobileNav(){
    const [open, setOpen] = useState(false)
    const openMenu = <button onClick={()=>setOpen(!open)}><i class="fa-solid fa-bars fa-2xl"></i></button>
    const closeMenu = <button onClick={()=>setOpen(!open)}><i class="fa-solid fa-xmark fa-2xl"></i></button>

    // const closeMenuOnClick = () => setOpen(false)

    return(
        <nav className="mobile-nav">
            {open? closeMenu : openMenu}
            {open && <NavLinks />}
        </nav>
    )
}