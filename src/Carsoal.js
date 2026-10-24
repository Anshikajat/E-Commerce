import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "./amz.css";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./carasoal.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Previbtn=(props)=>{
  
  const {className,onClick}=props
     return(
      <div className={className} onClick={onClick} style={{ height: "270px",widht:"600px", display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "-110px"}}><i className="fas fa-chevron-left" style={{ color: "#f0f2f5",fontSize:"50px" }}></i></div>
     )

}
const Nextbtn=(props)=>{
  const {className,onClick}=props
  return(
    <div className={className} onClick={onClick} style={{ height: "270px",widht:"600px", display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "-110px"}}>
    <i className="fas fa-chevron-right" style={{ color: "#f0f2f5",fontSize:"50px" }}></i>
  </div>
  )
}
export default function App(props) {
  return (
    <div>
    <div style={{margin:"0px 5px 0px 5px"}} className='carsoal'>
      <Slider autoplay={true} prevArrow={<Previbtn/>} nextArrow={<Nextbtn/>}>
      
      <div className='toblur'><img src={props.slide2} style={{width:"100%",height:"310px"}}/></div>
        <div className='toblur2'><img src={props.slide1} alt="" style={{width:"100%",height:"310px"}}/></div>
        <div className='toblur3'><img src={props.slide3} alt="" style={{width:"100%",height:"310px"}}/></div>
        <div className='toblur4'><img src={props.slide4} alt="" style={{width:"100%",height:"310px"}}/></div>
        <div className='toblur5'><img src={props.slide5} alt="" style={{width:"100%",height:"310px"}}/></div>
        </Slider>
      <div class="text"><p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.<a href="" class="link"> Click here to go to amazon.in</a></p></div>
      
      </div>
    </div>
  )
};