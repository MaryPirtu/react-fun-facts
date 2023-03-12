import React from "react"
import logo from "./images/logo.png"

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <img className="logo" src={logo} alt="react-logo" />
                <ul className="nav-items">
                    <li>React</li>
                    <li>Course</li>
                    <li>Project</li>
                </ul>
            </nav>
        </header>
    )
}