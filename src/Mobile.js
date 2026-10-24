import React, { useContext, useState, useEffect } from "react";
import "./mobile.css";
import { Link } from "react-router-dom";
import Addtocardbutton from "./Addtocardbutton.js";
import Notecontext from "./Notecontext.js"; 
import Moreproductdetailpage from "./Moreproductdetailpage.js";

export default function Mobile() {
  const { hoveredItem, setHoveredItem,itemclicked, products } = useContext(Notecontext);
  const [clickedItem, setClickedItem] = useState(null);
  
  const [hoveredclicked, setHoveredclicked] = useState(null);
  let contextData = useContext(Notecontext)
  
  // Effect to log the hovered item for debugging purposes
  useEffect(() => {
    console.log('Hovered item:', hoveredItem);
  }, [hoveredItem]);

  
  const handleHover = (item) => {
    
    if (hoveredItem !== item) {
      setHoveredItem(item);
    }
  };

  
  const handleClick = (item) => {
    setClickedItem(item);
    handleHover(item); 
  };
  useEffect(() => {
    console.log('Hoveredd item:', hoveredclicked);
  }, [hoveredclicked]);

  
  const handleclick = (item) => {
    
    if (hoveredclicked !== item) {
      setHoveredclicked(item);
    }
  };

  
  const hoverdClick = (item) => {
    setClickedItem(item);
    handleclick(item); 
  };
  

  return (
    <div className="Maingap">
      
      <div className="minnav">
        <span style={{ fontWeight: "bold", fontSize: "17px" }} onClick={()=>contextData.tochangedivpositive()}>
          {hoveredItem}
        </span>
        
          
        {
  
    [...new Set(products
      .filter(product => hoveredItem ? product.category === hoveredItem : true)
      .map(e => e.title)
    )].map((title) => <div className="toalign" key={title} onClick={()=> {contextData.tochangedivnegative(); hoverdClick(title); 
      hoverdClick(title);}}>{title}</div>)
  }
      
      </div>
      <div className="cartitems">
      {
      itemclicked ?
      products.filter(product => !hoveredItem || product.category === hoveredItem || product.title === hoveredItem)
          .map((e) => (
            <div className="cardd" key={e.id}>
              <div className="content">
                <Link to="/Moreproductdetailpage" onClick={() => {
                        handleClick(e.id); 
                        handleHover(e.id); 
                      }}>
                  <div className="fristcardd">
                    <img src={e.photo} alt={e.title} />
                  </div>
                </Link>
              </div>
              
              <div className="secondcardd">
                <h3>{e.description}</h3>
                <div className="stars">
                  <i className="fa-solid fa-star" style={{ color: "orange" }}></i>
                  <i className="fa-solid fa-star" style={{ color: "orange" }}></i>
                  <i className="fa-solid fa-star" style={{ color: "orange" }}></i>
                  <i className="fa-solid fa-star" style={{ color: "orange" }}></i>
                  <i className="fa-solid fa-star-half-stroke" style={{ color: "orange" }}></i>
                </div>
                <p>10K+ bought in past month</p>
                <p>{e.price}</p>
                <p>Delivery {e.deliverdate}</p>
                <p>Ships to India</p>
                <Addtocardbutton e={e}/>
              </div>
            </div>
          )):
          products.filter(product => !hoveredclicked || product.title === hoveredclicked)
          .map((e) => (
            <div className="cardd" key={e.id}>
              <div className="content">
                <Link to="/Moreproductdetailpage" onClick={() => {
                        handleClick(e.id); 
                        handleHover(e.id); 
                      }}>
                  <div className="fristcardd">
                    <img src={e.photo} alt={e.title} />
                  </div>
                </Link>
              </div>
              
              <div className="secondcardd">
                <h3>{e.description}</h3>
                <div className="stars">
                  <i className="fa-solid fa-star" style={{ color: "orange" }}></i>
                  <i className="fa-solid fa-star" style={{ color: "orange" }}></i>
                  <i className="fa-solid fa-star" style={{ color: "orange" }}></i>
                  <i className="fa-solid fa-star" style={{ color: "orange" }}></i>
                  <i className="fa-solid fa-star-half-stroke" style={{ color: "orange" }}></i>
                </div>
                <p>10K+ bought in past month</p>
                <p>{e.price}</p>
                <p>Delivery {e.deliverdate}</p>
                <p>Ships to India</p>
                <Addtocardbutton e={e}/>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}







