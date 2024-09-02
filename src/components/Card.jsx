import React from "react";
import cardImg from "../assets/katie-zaferes.png"
import starImg from "../assets/star.png"

export default function Card(){
    return (
        <div className="card">
            <img className="card-img" src={cardImg} />
            <div className="card-stats">
                <img className="card-star" src={starImg} />
                <p>5.0</p>
                <p className="grey">(6)</p>
                <p className="grey" > . </p>
                <p className="grey">USA</p>
            </div>
            <p className="card-title">Life lessons with katie</p>
            <h5 className="bold">From $136 <span className="grey">/ person </span></h5>

        </div>
    )
}