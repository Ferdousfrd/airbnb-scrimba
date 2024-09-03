import React  from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "../data.js"

import "./styles/app.css"

export default function App(){
    const cards = data.map(item => {
        return <Card 
                    key = {item.id}

                    rating = {item.stats.rating}
                    reviewCount = {item.stats.reviewCount}
                    location = {item.location}
                    title = {item.title}
                    price = {item.price}
                />
    })

    return(
        <>
            <Header />
            <div className="cards-section">
                {cards}

            </div>
        </>
    )
    
}