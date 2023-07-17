import React from "react";
import './Forceorder.css';
import NavButton from "./NavButton";
import gi from '../Assets/Images/BBgS.gif'
const Forceorder=()=>{
    return(
        <div className='sefaresh'>
        <span>
        <h5>هر لحظه در کنار شما هستیم.  <br/>
          
        <br/>
        <NavButton tittle='ثبت سفارش'/>
        </h5>
      
       <img src={gi} className='boll'/>  
</span>

       </div>
    )
}
export default Forceorder;