import { red } from '@mui/material/colors';
import 'font-awesome/css/font-awesome.min.css';
import * as React from 'react';
import { Outlet, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import NavButton from '../Component/NavButton';
import '../Component/Dropdown.css';

const Dropdown= () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };

  return (
    <div className="dropdown nav-linq " style={{background: 'rgba(255, 255, 255, 0%)'}}>
      <button onClick={handleOpen} className='butoon'>راهنمای سفارش
      <i className={open ? "fa fa-angle-double-up" : "fa fa-angle-double-down"} aria-hidden="true" style={{background:'rgba(255,255,255,0%)'}}></i>
      </button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
          <NavLink className='mn nav-links' to="/Reactguide"style={{ textDecoration: 'none' }}
             
           onClick={handleMenuOne} >
           
            <NavButton tittle='سایت ری اکت'/></NavLink>
           
          </li>
          <li className="menu-item">
          <NavLink className='mn nav-links' to="/wordpressguide"style={{ textDecoration: 'none' }}
             
             onClick={handleMenuOne} ><NavButton tittle='سایت وردپرس'/></NavLink>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;