import React from "react"
import Star from "../assets/star.png"
export default function Card(props){
    /* so we'll have sold out on anything that is sold out, even if it's online experience it will prefer sold out first because that's our first condition and then if it does have open spots and it's online then it shows online badge and if it's neither it shows no badge at all */

    /* we have written item everywhere alongside props as when we did console.log(props) all the properties were coming alongside item so therefore props.item.propertyname*/
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
        <img 
            src={require(`../assets/${props.coverImg}`)} 
            alt="Main card image." 
            className="card--image"
        />
<div className="card--stats">
<img src={Star} alt="Star icon." className="card--star"/>
<span>{props.stats.rating}</span>
<span className="gray">({props.stats.reviewCount}) • </span>
<span className="gray">{props.location}</span>
</div>
<p className="card--title">{props.title}</p>
<p className="card--price"><span className="bold">From ${props.price}</span>/ person</p>
    </div>
    )
}