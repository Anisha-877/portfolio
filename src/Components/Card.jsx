import React from 'react'
import './Card.css'


export default function Card({title,image}) {
  return (
    <div className="card">
      <h2>{title}</h2>
       <div className="hoverCard">
        <img src={image} alt=""/>
        </div> 
    </div>
  )
}
