import './Firstsection.css';
import * as React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Buttonblack from '../Component/Buttonblack';
import Laptop from '../Assets/Images/108347-designer.gif';

import image2 from '../Assets/Images/316313.png';
import image3 from '../Assets/Images/3170748.png';
import image4 from '../Assets/Images/Circle-icons-brush-pencil.svg.png';
const img = require('../Assets/Images/bg1.png');
const divStyle = {
  width: '100%',
  height: '610px',
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover'
};
const Firstsection =()=>{
  useEffect(()=>{
    Aos.init({duration:2000});
},[]);
return(
<div data-aos='zoom-in-up'>
  <div className='bg' style={divStyle}>
 <div className='firstchild'>
 <h1 >
    طراحی سایت نور 
    </h1> 
     <h2>  
        طراحی انواع سایت های شرکتی و فروشگاهی شما
      </h2> 
      <div className='con'>
         <div className='fig' data-aos="flip-right">
    <img src={image2} className="ico1"/> 
  <p className='cap'>مدرن </p>
</div>
<div className='fig' data-aos="flip-right">
<img src={image3} className="ico1"/>
<p className='cap'> ایمن</p>
</div>
<div className='fig' data-aos="flip-right">
<img src={image4} className="ico1"/>
<p className='cap'> زیبا </p>
</div>
      </div>
     
      <hr/>
        <Buttonblack url='/order' tittle='سفارش آنلاین'/>
       
</div>
<div className='secondchild'>

    <img src={Laptop}  className='lap' />
  

</div>

</div>  
</div>
);
};
export default Firstsection;