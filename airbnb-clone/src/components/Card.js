import React from "react"
import Katie from "../assets/katie.png"
import Star from "../assets/Star.png"
export default function Card(){
    return(
    <div className="card">
<img src={Katie} alt="Main card image." className="card--image"/>
<div className="card--stats">
<img src={Star} alt="Star icon." className="card--star"/>
<span>5.0</span>
<span className="gray">(6) • USA</span>
</div>
<h2>Life lessons with Katie Zaferes</h2>
<p><span className="bold">From $136</span>/ person</p>
    </div>
    )
}