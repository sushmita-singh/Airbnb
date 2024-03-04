import React from "react";
import Card from "./Card";
import data from "../data";

export default function Slider() {

    return (
        <div className="slider">
            <Card item = {data[0]} />
            <Card item = {data[1]}  />
            <Card item = {data[2]}  />
        </div>
    )
}
