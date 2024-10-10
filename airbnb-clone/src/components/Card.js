import React from "react"
import Star from "../assets/star.png"
export default function Card(props){
    let badgeText
    if(props.openSpots===0){
        badgeText="SOLD OUT"
    }
    else if(props.location==="Online"){
        badgeText="ONLINE"
    }
    return(
    <div className="card">
       {/* so basically if badgetext exists then only the badge text would be displayed, basically if the first statement returns a truthy then only the following statement executes */}
        {badgeText && <div className="card--badge">{badgeText}</div>}
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