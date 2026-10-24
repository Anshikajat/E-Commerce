import React, { createContext, useContext, useState } from 'react'
import Notecontext from './Notecontext'
import "./cartitem.css"

export default function Cartitem({ e }) {
  const { cartPageDisplay, cartItems } = useContext(Notecontext)
  let contextData = useContext(Notecontext)

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className='carttodesign'>
        <div style={{ display: "flex", gap: "830px" }}> <h1 style={{ marginLeft: "70px", marginTop: "40px" }}>Shopping Card</h1><h3 style={{ position: "relative", top: "100px" }}>Price</h3></div><hr />
        {
          cartPageDisplay
            ?
            cartItems.map((e) => (
              <div>
                <div className='cartitemdesign'>

                  
                    <div className='toimg'>
                      <img src={e.photo}/></div>  <div className='leftalign'>
                    <h2 style={{ fontWeight: "bold" }}>{e.description}</h2>
                    <span style={{ fontSize: "15px", color: "green" }}>In stock</span>
                    <span>Gift options not available.Gift options not available. <a href="/" style={{ color: "teal", textDecoration: "none" }}>Learn more</a></span>
                    <span style={{ display: "flex", gap: "10px" }}><i class="fa-solid fa-truck"></i>Amazon Delivered</span>
                    <div style={{display:"flex",gap:"20px"}}>
                    <div className='btntoaddrevome'><i class="fa-solid fa-trash" onClick={() => contextData.handleremovecart(e)}></i><span>{e.quantity}</span><i class="fa-solid fa-plus" onClick={() => contextData.handleAddToCart(e)}></i></div><div className='todeleteparticular' onClick={()=>contextData.completeremove(e)}>Delete</div></div></div>
                  <div className='prizing'>₹{(e.quantity) * (e.price)}</div></div><hr />
              </div>
            ))
            :
            <div><h1 style={{ marginLeft: "55px" }}>The Cart is Null</h1></div>
        }
        <h3 style={{ marginLeft: "940px" }}><span>Subtotal Items({cartItems.length}):</span> ₹
          {cartPageDisplay
            ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
            : null
          }
        </h3>
        <button onClick={() => contextData.clearCart()} className='deletbtn'>Delete</button>
      </div>
    </div>
  )
}
