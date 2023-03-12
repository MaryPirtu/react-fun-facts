import React from "react"
import logo from "./logo.png"

export default function Header() {
    return (
        <header>
            <nav>
                <img src={logo} alt="react-logo" width={"60px"} />
            </nav>
        </header>
    )
}