import React from "react"
import logo from "./logo.png"

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <img className="logo" src={logo} alt="react-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}