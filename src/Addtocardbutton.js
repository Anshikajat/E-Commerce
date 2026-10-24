import React,{useContext} from 'react'
import "./Addtocardbutton.css";
import Notecontext from './Notecontext';

export default function Addtocardbutton({e}) {
  let contextData = useContext(Notecontext);
  return (
    <div>
      <button class="Addcard" onClick={()=>contextData.handleAddToCart(e)}> Add to Card</button>
      
    </div>
  )
}
