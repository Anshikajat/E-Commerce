
import React, { useContext } from 'react'
import './Shopingcard.css'
import { useState, useEffect } from 'react';
import Notecontext from './Notecontext';
import { Link } from 'react-router-dom';


export default function Shopingcard({ e }) {
  const { hoveredItem, setHoveredItem, cartItems } = useContext(Notecontext);
  const [clickedItem, setClickedItem] = useState(null);
  let contextData = useContext(Notecontext)
  useEffect(() => {
    console.log('Hovered item:', hoveredItem);
  }, [hoveredItem]);

  const handleHover = (item) => {
    setHoveredItem(item);
  };


  const handleClick = (item) => {
    setClickedItem(item);


  };
  return (
    <div className='card'>
      <h1>{e.heading}</h1>
      <div className="imgs">
        <Link to="/Mobile" style={{ color: "black" }} onClick={() => {
          handleClick(e.img1_title);
          handleHover(e.img1_title);
          contextData.tochangedivpositive();
        }} className="img">
          <img src={e.img1} alt="img1" />
          <Link to="/Mobile" style={{ color: "black" }} onClick={() => {
            handleClick(e.img1_title);
            handleHover(e.img1_title);
            contextData.tochangedivpositive();
          }}  >{e.img1_title}</Link>
        </Link>
        <Link to="/Mobile" style={{ color: "black" }} onClick={() => {
          handleClick(e.img2_title);
          handleHover(e.img2_title);
          contextData.tochangedivpositive();
        }} className="img">
          <img src={e.img2} alt="img2" />
          <Link to="/Mobile" style={{ color: "black" }} onClick={() => {
            handleClick(e.img2_title);
            handleHover(e.img2_title);
            contextData.tochangedivpositive();
          }}  >{e.img2_title}</Link>
        </Link>
        <Link to="/Mobile" style={{ color: "black" }} onClick={() => {
          handleClick(e.img3_title);
          handleHover(e.img3_title);
          contextData.tochangedivpositive();
        }} className="img">
          <img src={e.img3} alt="img3" />
          <Link to="/Mobile" style={{ color: "black" }} onClick={() => {
            handleClick(e.img3_title);
            handleHover(e.img3_title);
            contextData.tochangedivpositive();
          }}  >{e.img3_title}</Link>
        </Link>
        <Link to="/Mobile" style={{ color: "black" }} onClick={() => {
          handleClick(e.img4_title);
          handleHover(e.img4_title);
          contextData.tochangedivpositive();
        }} className="img">
          <img src={e.img4} alt="img4" />
          <Link to="/Mobile" style={{ color: "black" }} onClick={() => {
            handleClick(e.img4_title);
            handleHover(e.img4_title);
            contextData.tochangedivpositive();
          }}  >{e.img4_title}</Link>
        </Link>
      </div>
      <div id='tomakered'>
        <Link id='one' to="/Mobile" onClick={() => {
          handleClick(e.category);
          handleHover(e.category);
          contextData.tochangedivpositive();
        }}>See More</Link>
        </div>
    </div>
  )
}