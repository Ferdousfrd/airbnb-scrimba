import React from "react";
import airbnbLogo from "../assets/airbnb-logo.png"
import photoGrid from "../assets/photo-grid.png"

export default function Header(){
    return (
        <div className="header-container">
            <div className="nav">
                <img className="nav-img" src={airbnbLogo} />
            </div>
            <div className="hero">
                <img className="grid-img" src={photoGrid} />
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>    
        </div>
    )
}