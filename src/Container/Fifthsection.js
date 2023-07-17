import React from 'react';
import './Fifthsection.css';
import tech from '../Assets/Images/Tech.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Wordpresscontent,{ Reactcontent } from '../Component/Fifthsectioncontext';
const img = require('../Assets/Images/bg3.jpg');
const divStyle = {
  width: '100%',
  height: '1200px',
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover'
};
const Fifthsection=()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
<div style={divStyle}  className='bgfifth' >
<div>
    <p className='middle'>
   <h1>انواع وب سایت</h1>     
    </p>
</div>
<div className='cent' data-aos='fade-down'>
    <img src={tech} className='tech'/>
</div>
<div className='r'>
<div className='c' data-aos="flip-left"><span className='pp'>React </span>
<br/>
<Reactcontent/>


<a href='/Reactguide'>
    <button className='butto'>ادامه مطلب</button>
</a>
</div>
<div className='c' data-aos="flip-right">
<span className='pp'>Wordpress </span>
<br/>
<Wordpresscontent/>

<a href='/Wordpressguide'>
    <button className='butto'>ادامه مطلب</button>
</a>
</div>
</div>



 </div>  

    );
};
export default Fifthsection;
