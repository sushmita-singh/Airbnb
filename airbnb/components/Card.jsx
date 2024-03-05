import React from "react";

export default function Card(props) {

    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="slider-element">
            <div className="slider-image-section">                    
            {badgeText && <div className="btn">{badgeText}</div>}
                <img src={`../images/${props.item.coverImg}`} alt="slider-image" className="slider-image"/>
            </div>
            <div className="slider-desc"> 
                <div className="ratings-section">
                    <img src="../images/star.png" alt="star" className="star" />
                    <p className="ratings">{props.item.stats.rating}<span className="light"> ({props.item.stats.reviewCount})•{props.item.location}</span></p>
                </div>
                <h3 className="slider-heading">{props.item.title}</h3>
                <p className="rate"><span className="bold">From ${props.item.price}</span> /person</p>
            </div>
        </div>
    )
}