import React from "react"
import Star from "../assets/star.png"
export default function Card(props){
console.log(props.openSpots)
    return(
    <div className="card">
<img src={`../assets/${props.img}`} alt="Main card image." className="card--image"/>
<div className="card--stats">
<img src={Star} alt="Star icon." className="card--star"/>
<span className="gray">({props.reviewCount}) • </span>
<span className="gray">{props.location}</span>
</div>
<p className="card--title">{props.title}</p>
<p className="card--price"><span className="bold">From ${props.price}</span>/ person</p>
    </div>
    )
}