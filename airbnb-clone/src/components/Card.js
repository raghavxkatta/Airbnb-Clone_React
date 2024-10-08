import React from "react"
import Star from "./Star.png"
export default function Card(props){
console.log(props)
    return(
    <div className="card">
<img src={props.img} alt="Main card image." className="card--image"/>
<div className="card--stats">
<img src={Star} alt="Star icon." className="card--star"/>
<span>{props.reviewCount}</span>
<span className="gray">(6) • {props.country}</span>
</div>
<h2>{props.title}</h2>
<p><span className="bold">From ${props.price}</span>/ person</p>
    </div>
    )
}