import React from "react";
import cardImg from "../assets/katie-zaferes.png"
import starImg from "../assets/star.png"



export default function Card(props){
    return (
        <div className="card">
            
            <div className="card-stats">
                <img className="card-star" src={starImg} />
                <p>{props.rating}</p>
                <p className="grey">({props.reviewCount})</p>
                <p className="grey" > . </p>
                <p className="grey">{props.location}</p>
            </div>
            <p className="card-title">{props.title}</p>
            <h5 className="bold">From ${props.price} <span className="grey">/ person </span></h5>

        </div>
    )
}