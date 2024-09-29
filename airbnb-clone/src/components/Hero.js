import React from "react"
import Photogrid from "../assets/photogrid.png"
export default function Hero(){
    return(
        <section className="hero">
            
        <img src={Photogrid} alt="Photogrid" className="hero--photo"/>
        
            <h1 className="hero--header">Online experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}