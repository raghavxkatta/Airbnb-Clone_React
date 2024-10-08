import React from "react"
import Logo from "./"
export default function Navbar(){
    return(
        <nav>
        <img src={Logo} alt="Logo" className="nav--logo" />
        </nav>
    )
}