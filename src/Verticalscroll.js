import React, { useState ,useContext}from 'react';
import "./Verticalscroll.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect } from 'react';
import Notecontext from './Notecontext';
import { Link } from 'react-router-dom';

export default function Verticalscroll() {
  let contextData = useContext(Notecontext)
    const { hoveredItem, setHoveredItem,cartItems } = useContext(Notecontext);
  const [clickedItem, setClickedItem] = useState(null);
  useEffect(() => {
    console.log('Hovered item:', hoveredItem);
  }, [hoveredItem]);
  
  const handleHover = (item) => {
    setHoveredItem(item);
  };
    
  
  const handleClick = (item) => {
    setClickedItem(item);
    
  
  };
    const [products] = useState([
        {
            id: 1,
            img1: "https://m.media-amazon.com/images/I/31pAe23ncfL._SR480,440_.jpg",
            discount: "43",
            title:"Headphone",
            discounttitle: "Great Indian Festival",
            mrp: "15,000",
            price:"25,000",
            description: "Wireless headphones are headphones that connect to a device, such as a smartphone, stereo speaker, television, gaming console, computer or other electronic devices, without using a wire or cable.",
        },
        {id:2,            
         img1:"https://m.media-amazon.com/images/I/41MNpp00hmL._SR480,440_.jpg",             
         discount:"55",  
         title:"Watch",          
         discounttitle:"Great Indian Festival",             
         mrp:"15,000", 
         price:"25,000",            
         description:"A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.",         
        }, 
        {id:3,            
            img1:"https://m.media-amazon.com/images/I/51bP5mNwo3L._AC_SY200_.jpg",             
            discount:"44", 
            title:"Hair Oil",           
            discounttitle:"Great Indian Festival",             
            mrp:"1,000", 
            price:"2,000",            
            description:"Bajaj 100% Pure Coconut Oil 600 ml",         
           }, 
           {id: 4,            
            img1:"https://m.media-amazon.com/images/I/41RnOYN7cML._SR480,440_.jpg",             
            discount:"50",
            title:"Suitcase",            
            discounttitle:"Great Indian Festival",             
            mrp:"1,599", 
            price:"2,999",            
            description:"Luggage is anything you use to carry your things with you on a trip. If you're backpacking across Asia, your only luggage is the pack on your back. Suitcases are luggage, and if you pack a trunk full of gifts to bring your family in India, that's luggage too.",         
           }, 
           {id: 5,            
            img1:"https://m.media-amazon.com/images/I/31hXqtvutdL._SR480,440_.jpg",             
            discount:"40",            
            discounttitle:"Great Indian Festival", 
            title:"Headphone",            
            mrp:"2,500", 
            price:"4,000",            
            description:"Such earbuds are portable speakers that fit inside people's ears and connect to any audio-producing device (e.g., a phone or computer) using Bluetooth audio technology. Wired earbuds, by contrast, use a cable to attach to devices that have an input jack",         
           }, 
           {id:6,            
            img1:"https://m.media-amazon.com/images/I/61jVCT4hAxL._AC_SY200_.jpg",
            title:"Shampoo",             
            discount:"20",            
            discounttitle:"Great Indian Festival",             
            mrp:"600", 
            price:"750",            
            description:"Hair & Care Damage Repair Non-Sticky Hair Oil with Aloe Vera, Olive Oil & Green Tea, 300 ml",         
           }, 
           {id:7,            
            img1:"https://m.media-amazon.com/images/I/41ulmLxN2kL._SR480,440_.jpg",             
            discount:"30",
            title:"Suitcase",            
            discounttitle:"Great Indian Festival",             
            mrp:"5,000", 
            price:"6,000",            
            description:"A bag is a lightweight, flexible container meant for carrying things. A grocery bag is one you bring home from the supermarket full of food. In some places the word sack is more common, but the handled container you get at the store when you buy something is usually called a bag.",         
           }, 
           {id:8,            
            img1:"https://m.media-amazon.com/images/I/31Tz8DcmevL._SR480,440_.jpg",             
            discount:"20",
            title:"Smart Thermostat",            
            discounttitle:"Great Indian Festival",             
            mrp:"5,504", 
            price:"7,999",            
            description:"to remove bad substances from something to make it pure: Plants help to purify the air. One of the functions of the kidneys is to purify the blood. water-purifying tablets.",         
           }, 
    ]);
    const Previbtn=(props)=>{
  
        const {className,onClick}=props
           return(
            <div className={className} onClick={onClick} style={{ backgroundColor:"white",height: "100px",paddingRight:"10px",paddingLeft:"10px",border:"1px solid grey", display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "-30px"}}><i className="fas fa-chevron-left" style={{ color: "black",fontSize:"20px" }}></i></div>
           )
      
      }
      const Nextbtn=(props)=>{
        const {className,onClick}=props
        return(
          <div className={className} onClick={onClick} style={{ height: "270px",backgroundColor:"white",height: "100px",paddingRight:"10px",paddingLeft:"10px",border:"1px solid grey", display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "-30px"}}>
          <i className="fas fa-chevron-right" style={{ color: "black",fontSize:"20px" }}></i>
        </div>
        )
      }

    return (
        <div className='scrollv'>
            <h1>Today's Deal</h1>
            
            <Slider slidesToShow={5} prevArrow={<Previbtn/>} nextArrow={<Nextbtn/>}>
                {products.map(product => (
                    <Link to="/Mobile" key={product.id} className='eachitem' style={{objectFit:"contain"}} onClick={() => {
                        handleClick(product.title); 
                        handleHover(product.title); 
                        contextData.tochangedivpositive();
                      }}  >
                        <img src={product.img1} alt={`Product ${product.id}`} style={{objectFit:"contain"}} />
                        <div className='dicount'>
                            <span className='dicountspan'>{product.discount}% off</span>
                            <span style={{color: "red", fontSize: "12px", fontWeight: "bold", paddingTop: "3px"}}>
                                {product.discounttitle}
                            </span>
                        </div>
                        <div className='price'>
                            <p style={{fontSize: "15px", fontWeight: "bold"}}>₹{product.mrp}</p>
                            <p style={{fontSize: "12px", display: "flex", columnGap: "5px", paddingTop: "2px"}}>
                                M.R.P <s>{product.price}</s>
                            </p>
                        </div>
                        <div className='discriptiion'>
                            <p style={{fontSize: "13px"}}>{product.description}</p>
                        </div>
                    </Link>
                ))}
            </Slider>
            
        </div>
    );
}
