import React from "react";

export default function Slider() {
    return (
        <div className="slider">
            <div className="slider-element">
                <div className="slider-image-section">                    
                    <button className="btn">SOLD OUT</button>
                    <img src="../images/11.jpg" alt="slider-image" className="slider-image"/>
                </div>
                <div className="slider-desc">
                    <div className="ratings-section">
                        <img src="../images/star.png" alt="star" className="star" />
                        <p className="ratings">5.0<span className="light"> (6)•USA</span></p>
                    </div>
                    <h3 className="slider-heading">Life lessons with Katie Zaferes</h3>
                    <p className="rate"><span className="bold">From $136</span> /person</p>
                </div>
            </div>

            <div className="slider-element">
                <div className="slider-image-section">
                    <button className="btn">ONLINE</button>
                    <img src="../images/12.jpg" alt="slider-image" className="slider-image"/>
                </div>
                <div className="slider-desc">
                    <div className="ratings-section">
                        <img src="../images/star.png" alt="star" className="star" />
                        <p className="ratings">5.0<span className="light"> (30)•USA</span></p>
                    </div>
                    <h3 className="slider-heading">Learn wedding photography</h3>
                    <p className="rate"><span className="bold">From $125</span> /person</p>
                </div>
            </div>

            <div className="slider-element">
                <div className="slider-image">
                    <img src="../images/13.jpg" alt="slider-image" className="slider-image"/>
                </div>
                <div className="slider-desc">
                    <div className="ratings-section">
                        <img src="../images/star.png" alt="star" className="star" />
                        <p className="ratings">4.8<span className="light"> (2)•USA</span></p>
                    </div>
                    <h3 className="slider-heading">Group Mountain Biking</h3>
                    <p className="rate"><span className="bold">From $50</span> /person</p>
                </div>
            </div>
    </div>
    )
}