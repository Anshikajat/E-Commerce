import React from 'react'
import "./sidebar.css";
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='byby'>
    <div className='toblack'>
    <div className='sidebar'>
      <div div className='hellosign'><i className="fa-solid fa-circle-user" style={{color: "#dcdfe5", fontSize:"30px",marginLeft:"30px"}}></i><span style={{fontSize:"20px",fontWeight:"bold"}}>Hello,sign in</span></div>
    <div className='downside'>
      <h2>Digital Content & Devices</h2>
      <div className='wholeitwm'><div className="downsideitem"><p>Amazon Music</p> <i class="fa-solid fa-chevron-right"></i></div></div>
      <div className='wholeitwm'><div className='downsideitem'><p>Kindle E-reader & Books </p><i class="fa-solid fa-chevron-right"></i></div></div>
      <div className='wholeitwm'><div className='downsideitem'><p>Amazon Appstore </p><i class="fa-solid fa-chevron-right"></i></div></div>
    <hr/><h2>Shop by Department</h2>
    <div className='wholeitwm'><div className="downsideitem"><p>Electronics</p> <i class="fa-solid fa-chevron-right"></i></div></div>
    <div className='wholeitwm'><div className='downsideitem'><p>Computer</p><i class="fa-solid fa-chevron-right"></i></div></div>
    <div className='wholeitwm'><div className='downsideitem'><p>Smart Home</p> <i class="fa-solid fa-chevron-right"></i></div></div>
    <div className='wholeitwm'><div className='downsideitem'><p>Arts & Crafts </p><i class="fa-solid fa-chevron-right"></i></div></div>
    <hr/><h2>Programs & Features</h2>
    <div className='wholeitwm'><div className="downsideitem"><p>Gift Cards</p> <i class="fa-solid fa-chevron-right"></i></div></div>
    <div className='wholeitwm'><div className='downsideitem'><p>Shop By Interest </p><i class="fa-solid fa-chevron-right"></i></div></div>
    <div className='wholeitwm'><div className='downsideitem'><p>Amazon Live </p><i class="fa-solid fa-chevron-right"></i></div></div>
    <div className='wholeitwm'><div className='downsideitem'><p>International Shopping</p> <i class="fa-solid fa-chevron-right"></i></div></div>
    <hr/><h2>Help & Settings</h2>
    <div className='wholeitwm'><div className="downsideitem"><p>Your Account</p></div></div>
    <div className='wholeitwm'><div className='downsideitem'><p><i class="fa-solid fa-globe"></i> English</p></div></div>
    <div className='wholeitwm'><div className='downsideitem'><p>United State</p></div></div>
    <div className='wholeitwm'><div className='downsideitem'><p>Customer Service</p></div></div>
    <div className='wholeitwm'><div className='downsideitem'><p>Sign in</p></div></div>
    </div>
    </div>
    <Link to="/" className='crossbtn'><i className="fa-solid fa-xmark" style={{color: "#f5f7fa",fontSize:"30px"}}></i></Link>
    </div>
    </div>
  )
}
