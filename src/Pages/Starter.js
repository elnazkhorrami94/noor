import './Starter.css';
import React,{ Fragment, useEffect } from 'react';


import sample from '../Assets/Images/wave.mp4';
import gi from '../Assets/Images/67395-next2 (2).gif';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Starter=()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
  
    return(
        <Fragment  >
            <video id="myVideo" autoPlay loop muted controls  data-aos="fade-in"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <source  src={sample} type='video/mp4'/> 
            </video>
          <div className='live'data-aos="fade-down">
 <h1>LIVE YOUR DREAMS</h1>
 <br/>
 <a href='./home' style={{ textDecoration: 'none' }} className='bu'>
   <button className='start'>ورود</button>
    </a>
    <span class='pulse-button'>pulse</span>
          </div>
{/*         
            <div class="content"  data-aos="zoom-in" data-aos-duration="3000">
           
            
          
 <h2 >به وب سایت نور خوش آمدید</h2>
<h2 >برای ادامه کلیک کنید</h2>

<a href='./home' style={{ textDecoration: 'none' }} className='aa'>
    <img src={gi} className='gi'/> 
    </a>
 
</div>
            
  */}
        </Fragment>
    );
};
export default Starter;