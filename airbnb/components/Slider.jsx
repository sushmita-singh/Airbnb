import React from "react";
import Card from "./Card";
import data from "../data";

export default function Slider() {

    const cardData = data.map((item) => <Card key={item.id} item = {item} />)

    return (
        <div className="slider">
            {cardData}
        </div>
    )
}
