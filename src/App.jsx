import React  from "react";
import Header from "./components/Header";
import Card from "./components/Card";

import "./styles/app.css"

export default function App(){
    return(
        <>
            <Header />
            <div className="cards-section">
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
    
}