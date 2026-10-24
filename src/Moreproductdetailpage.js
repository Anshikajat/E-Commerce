import React, { useContext, useState,useEffect } from 'react'
import "./moreproductdetailpage.css"
import Addtocardbutton from "./Addtocardbutton";
import Notecontext from './Notecontext';
import { Link } from 'react-router-dom';
import "./Verticalscroll.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


export default function Moreproductdetailpage() {
  const { hoveredItem,products, setHoveredItem } = useContext(Notecontext);
  
  const [clickedItem, setClickedItem] = useState(null);
  
  useEffect(() => {
    console.log('Hovered itemmoreitem:', hoveredItem);
  }, [hoveredItem]);
  
  const handleHover = (item) => {
    setHoveredItem(item);
  };
    
  
  const handleClick = (item) => {
    setClickedItem(item);
    
  
  };

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
    <div>
       {products
          .filter(product => !hoveredItem || product.id === hoveredItem)
          .map((e) =>
            <div>
      <div className='moredetailpage'>
        
      <div className='leftimg'>
        <img src={e.photo}/>
      </div>
      <div className='productdetail'>
        <div className='upperpartproduct'>
        <p style={{color:"teal"}}>{e.title}</p>
        <h1>{e.description}</h1>
        <div className='ratingpricing'><p>4.5/5 </p><a href="/">Search this page</a></div>
        </div><br/>
        <hr/>
        <div className='pricingandemi'>
            <h2>₹ {e.price}</h2><br/>
            <p>Exclusive all taxes</p>
            <p>EMI start at ₹95 per month <span style={{color:"teal"}}> EMI option</span></p>
        </div><br/>
        <hr/><br/>
        <div className='offers'>
            
            <p>Offers</p><br/>
            <div className='middleoffers'>
                <div className='partneroffer'>
                    <h4>Partner offers</h4>
                    <p>Buy 2 or more and get 5% off on Qua…</p>
                    <p style={{color:"teal"}}>2offers</p>
                </div>
                <div className='bankoffer'><h4>Bank Offer</h4>
<p>Upto ₹104.90 discount on select Credit CardsUpto ₹104.90 discount on select…</p>
<p style={{color:"teal"}}>2 offers</p></div>
            </div><br/>
            <hr/><br/>
            <div className='deliveryandmore'>
                <div style={{display:"flex",flexDirection:"column",gap:"1px" ,width:"100px",justifyContent:"center"}}><img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB562506492_.png"/><p style={{color:"teal"}}>10 days return and exchange</p></div>
                <div style={{display:"flex",flexDirection:"column",gap:"1px" ,width:"100px",justifyContent:"center"}}><img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB562549966_.png"/><p style={{color:"teal"}}>Free Delivery</p></div>
                <div style={{display:"flex",flexDirection:"column",gap:"1px" ,width:"100px",justifyContent:"center"}}><img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB562506657_.png"/><p style={{color:"teal"}}> Top Brand</p></div>
                <div style={{display:"flex",flexDirection:"column",gap:"1px" ,width:"100px",justifyContent:"center"}}><img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB562550117_.png"/><p style={{color:"teal"}}>Amzon Delivered</p></div>
                <div style={{display:"flex",flexDirection:"column",gap:"1px" ,width:"100px",justifyContent:"center"}}><img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/Secure-payment._CB650126890_.png"/><p style={{color:"teal"}}>Secure Transcation</p></div>
            </div><br/>
            <hr/><br/>
            <div className='sizing'>
                <h3>Size</h3>
                <select><option>M</option>
                <option>XL</option>
                <option>S</option>
                <option>XXL</option></select>
            </div><br/>
            <div className='prodectitemcloths'>
                <h2>Prodect Detail</h2>
                <div style={{display:"flex",flexDirection:"row",gap:"50px" }}><h3 >Material composition </h3><span>Cotton Rich</span></div>
                <div style={{display:"flex",flexDirection:"row",gap:"50px" }}><h3>Pattern</h3><span>Solid</span></div>
                <div style={{display:"flex",flexDirection:"row",gap:"50px" }}><h3>Fit type</h3><span>Regular Fit</span></div>
                <div style={{display:"flex",flexDirection:"row",gap:"50px" }}><h3>Sleeve type</h3><span>Half Sleeve</span></div>
                <div style={{display:"flex",flexDirection:"row",gap:"50px" }}><h3>Collar style</h3><span>Collared Neck</span></div>
                <div style={{display:"flex",flexDirection:"row",gap:"50px" }}><h3>Length</h3><span>Standard Length</span></div>
                <div style={{display:"flex",flexDirection:"row",gap:"50px" }}><h3>Country of Origin</h3><span>India</span></div>
            </div><br/>
            <hr/>
            <br/>
            <div className='aboutitem'>
                <h2>About the Iteam</h2>
                <ul><li>Ultra Soft: The fabric is extremely soft and comfortable, keeping you at ease for hours.</li>
                <li>Polo Collar: This t-shirt is designed with a polo collar.</li>
                </ul>
            </div><br/>
        </div>
      </div>
      <div className='priceright'>
        <h2>₹{e.price}</h2><br/>
        <p><span style={{color:"teal"}}>FREE delivery </span>{e.deliverdate}. <span style={{color:"teal"}}>Details</span></p>
        <br/><p>Or fastest delivery <span style={{fontWeight:"bold"}}>{e.deliverdate}. </span>Order within <span style={{fontWeight:"bold"}}> 18 hrs 7 mins.</span> <span style={{color:"teal"}}>Details</span></p>
        <br/>
        <Addtocardbutton e={e}/>
      </div>
      </div>
      <div className='moreitemrelatedtothi'>
      <div className='scrollv'>
            <h1>Related Products</h1><br/>
            
            <Slider slidesToShow={5} prevArrow={<Previbtn/>} nextArrow={<Nextbtn/>}>
{products
    .filter(product => !hoveredItem || product.title === e.title ||  product.category === e.category) // Show products with same category
    .filter(product => product.id !== e.id) // Exclude the current product
    .map((product) =>
        <Link to="/Moreproductdetailpage" key={product.id} className='eachitem' style={{objectFit:"contain"}} onClick={() => {
          handleClick(product.id); // Trigger the click event
          handleHover(product.id); // Trigger the hover event
        }} >
            <img src={product.photo} alt={`Product ${product.id}`} style={{objectFit:"contain"}} />
            <div className='dicount'>
                <span className='dicountspan'>20% off</span>
                
            </div>
            <div className='price'>
                <p style={{fontSize: "15px", fontWeight: "bold"}}>₹{product.mrp}</p>
                <p style={{fontSize: "15px", display: "flex", columnGap: "5px", paddingTop: "2px",fontWeight:"bold"}}>
                    M.R.P {product.price}
                </p>
            </div>
            <div className='discriptiion'>
                <p style={{fontSize: "13px"}}>{product.description}</p>
            </div>
        </Link>
    )}
</Slider>
            
        </div>
        </div>  
      </div>
      
          )}
          
    </div>
  )
}
