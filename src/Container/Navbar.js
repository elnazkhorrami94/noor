import 'font-awesome/css/font-awesome.min.css';
import './Navbar.css';
import { Outlet, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import NavButton from '../Component/NavButton';
import image from '../Assets/Images/Noor.png';
import { useState } from "react";
import Dropdown from '../Component/Dropdown';
import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Navvv=()=>{
  useEffect(()=>{
    Aos.init({duration:2000});
},[]);
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
    
    return (
      <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
      <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">

      <NavLink className='mn nav-links' to="/" style={{ textDecoration: 'none' }}activeClassName="active"
               
                onClick={click ? handleClick : null}>  <NavButton tittle='خانه'/>
                </NavLink>
</li>


<li className="nav-item">

<NavLink className='mn nav-links' to="" style={{ textDecoration: 'none' }}activeClassName="active"
               
               onClick={click ? handleClick : null}>  <NavButton tittle='تعرفه و نمونه کارها'/>
               </NavLink>

</li>


      <li className="nav-item">
     <NavLink className='mn nav-links' to="/order"style={{ textDecoration: 'none' }}activeClassName="active"
                
               onClick={click ? handleClick : null}><NavButton tittle='ثبت سفارش  '/></NavLink>
     </li>
      <li className="nav-item">
      <NavLink className='mn nav-links' to="/contactus"style={{ textDecoration: 'none' }}activeClassName="active"
             
               onClick={click ? handleClick : null}><NavButton tittle='تماس با ما'/></NavLink>
     </li>
     </ul>
      <Outlet />  
      <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"} style={{ background: 'rgba(255, 255, 255, 0%)' }}></i>
          </div> 
     
     
      </div>
       <img src={image} className="logo"/>
      </nav>
    </ div>
  );
}

export default Navvv;




