import React from "react";
import "./housegallery.css";

export default function HouseGallery(props) {
  return (
    <div className="App-house" key={"HG" + String(props.i)}>
      <img src={props.imgUrl} alt={props.name} />
      <p>{props.name}</p>
      <p>Price: {props.price}</p>
      <p>
        {props.bed} beds | {props.baths} baths | {props.sqft} sqft
      </p>
      <p>{props.location}</p>
    </div>
  );
}
