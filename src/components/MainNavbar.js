import React from "react"

// NAVBAR LOGO ROUTE
const GeraspaceLogo = "images/Geraspace_Logo.png"

export default function MainNavbar(){
    return(
        <div className="div--nav">
            <nav className="main--nav"> 
                <img className="nav--logo" src={GeraspaceLogo}/>
                <h1 className="nav--Title">Geraspace</h1>
            </nav>
        </div>
    )
}