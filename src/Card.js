import React from 'react'
import './amz.css'
import "./Shopingcard.css";

export default function Card(props) {
  return (
    <div id="shopping2"><h2>{props.title}</h2><img src={props.img1}/><a href="/">{props.down}</a></div>
      
  )
}
