import './amz.css'
import React,{useContext} from 'react'
import mobile from './Mobile.js';
import { useState, useEffect } from 'react';
import "./sidebar.css";
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Notecontext from './Notecontext';


export default function Navbar() {
  const { hoveredItem, setHoveredItem,cartItems,serachItem, setSerachItem } = useContext(Notecontext);
  const [clickedItem, setClickedItem] = useState(null);
   // State to store clicked item
  let contextData = useContext(Notecontext)

  const a=[{name:"Home and Decor"},{name:"Fashion"},{name:"Electronics"}]
 
  

  useEffect(() => {
    console.log('Hovered item:', hoveredItem);
  }, [hoveredItem]);
  
  const handleHover = (item) => {
    setHoveredItem(item);
  };
    
  
  const handleClick = (item) => {
    setClickedItem(item);
    
  
  };
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle the "All" button click
  const handleShowSidebar = () => {
    setIsVisible(true); // Show the sidebar
  };

  // Function to handle the cross/close button click
  const handleHideSidebar = () => {
    setIsVisible(false); // Hide the sidebar
  };
  const Serachbarvalue=(seachval)=>{
    setSerachItem(seachval)
    
  }

  const Handlekey = (event) => {
    console.log(`Key pressed: ${event.key}`);
    if (event.key === 'Enter') {
      Serachbarvalue(serachItem); // Pass the current search item
    }
  };
  
  useEffect(() => {
    console.log('search item:', serachItem);
  }, [serachItem]);
  return (
    <div>
  <div>
    
        <div className="navbar" >
            <Link to="/" className="nav_logo">
            <div className="logo"></div></Link>

            <div className="seconditem">
                <div className="ho">
                <p class="d" style={{paddingLeft: "15px",paddingTop: "10px",fontSize: "12px"}}>Deliver to</p>
                
                <i className="fa-solid fa-location-dot" style={{color: "#fdfdfc"}}></i>
                <i>India</i>
                </div>
                </div>

                <div className="third">
                    <select class="selc">
                        <option>All</option>
                        <option value="electronics">Electronics</option>
                      <option value="books">Books</option>
                      <option value="clothing">Clothing</option>
                      <option value="home">Home & Kitchen</option>
                      <option value="toys">Toys & Games</option>
                      <option value="beauty">Beauty & Personal Care</option>
                      <option value="sports">Sports & Outdoors</option>
                      <option value="automotive">Automotive</option>
                      <option value="grocery">Grocery</option>
                      </select>
                      <input
  placeholder="Search Amazon"
  className="sec"
  value={serachItem || ''} // Ensure input has a value, fallback to an empty string
  onChange={(e) => setSerachItem(e.target.value)} // Updates state on change
  onKeyDown={(e) => Handlekey(e)} // Call Handlekey on keydown
/>
                <button class="magnifying"><Link to="/Serachbarpage"><i class="fa-solid fa-magnifying-glass"></i></Link></button>

                    
                </div>
                
                <div class="fouth">
                    
                    
                    <img src="data:image/png;base64,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" height="20px"  alt="jfghruhruh"/>
                    <select class="selcc" id="languageSelect"><option>ENG</option><option>HIN</option></select>
                </div>
                <div className="amazon-business-hover">
                 <div class="fifth">
                    <p style={{color: "white", fontSize: "12px",fontWeight: "bold"}}>Hello,sign in</p>
                    <select style={{backgroundColor: "transparent",color: "white",border: "none", fontWeight:"bolder"}}><option>Account & List</option></select>
                 </div>
                 <div className="dropdown1-menu">
    <div className='uper-hide'>
      <br/>
      <div className='clickbtn'>
      <Link to="/Singnpage" className='clicktext'>Singn up</Link></div><br/>
      <p>New Customer? <a href="/" className='aaa'>Click Here</a></p>
    </div><br/><hr/>
    <div className='lower-hide'>
      <div className='lower-hide-left'>
        <h4>your list</h4>
        <p>Create a List</p>
        <p>Find a List or register</p>
      </div>
      <div className='lowerhide-right'>
        <h4>Your Account</h4>
        <p>Order</p>
        <p>Return</p>
        <p>Recommendation</p>
        <p>Browser Histrory</p>
        <p>Watchlist</p>
        <p>Vedio purchase and rental</p>
        <p>Kindly unlimited</p>
        <p>Content and Device</p>
        <p>Subscribe and Save Later</p>
        <p>Music Libaray</p>
      </div>
    </div>
  
  </div>
</div>
                 
                  <div class="sixth">
                    <p style={{fontSize: '12px',fontWeight: 'bold',paddingTop:'12px'}}>Returns</p>
                    <p style={{fontWeight: "bolder"}}>& Orders</p>
                  </div>
                 
                   <Link to="/Cartitem" className="seven">
                    <div style={{fontSize: "35px",paddingTop: "5px" }}><i class="fa-solid fa-cart-shopping" style={{color: "#e1dbdb"}}></i></div>
                    <div style={{display:"flex",flexDirection:"column", gap:"7px"}}><span style={{marginLeft:"10px",color:"orange",fontWeight:"bolder"}}>{cartItems.length}</span><p style={{fontWeight: "bolder"}}>Cart</p></div>
                   </Link>
                
            </div>
            
              <div class="second">
              
                <div><div onClick={handleShowSidebar} className='coverta'>
                  <i className="fa-solid fa-bars" style={{color: "#f1f4f8"}}></i>All
                </div>
              
                 
                </div>
                <div className="secondnav"><a href="https://www.amazon.in/minitv/tp/amzn1.dv.gti.5d54f0f8-8efc-4781-a933-bb16254139a6">Amazon miniTv</a></div>
                <div className="secondnav"><a href="https://www.primevideo.com/gp/video/offers?benefitId=discoveryplusin">Prime</a></div>
                <div className="secondnav amazon-business-hover">
  <Link to="/">
    Amazon Business <i className="fa-solid fa-caret-down" style={{color: "#fcfcfd"}}></i>
  </Link>
  <div className="dropdown-menu">
    <img src="https://m.media-amazon.com/images/G/31/AmazonBusiness/AcqusitionFlyout/Phase1/abAcquisitionPersonalized-en-IN._CB597569472_.png" width="500px" className='dropdown-item'/>
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC-3_1x._SY116_CB545072051_.jpg" width="200px" className='dropdown-item'/>
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/Jupiter/BTF/Phase3/PCQC/1x/Sarees_372x232_5_11zon._SY116_CB545103190_.jpg" width="200px" className='dropdown-item'/>
  </div>
</div>
                

                {
                  a.map((item,ind)=>{
                    return(
                      <div className='secondnav'><Link 
                      to={"/Mobile"} 
                      onClick={() => {
                        handleClick(item.name); 
                        handleHover(item.name);
                        contextData.tochangedivpositive();
                         
                      }}  
                    >
                      {item.name}
                    </Link></div>
                    );
                  })
                }
                <div className="secondnav"><Link to="/Customerservice" >Customer Service</Link></div>
              </div>

              </div>
              
        </div>
        
  );
}
