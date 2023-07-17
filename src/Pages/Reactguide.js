import Navvv from '../Container/Navbar';
import Footer from '../Container/Footer';
import './Reactguide.css';
import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Sec,{First} from '../Component/Reactguidecontext';
import rea from '../Assets/Images/tsr.png'
import tsr2 from '../Assets/Images/tsr2.png'
import { useEffect } from 'react';
import Forceorder from '../Component/Forceorder';

const Reactguide = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
},[]);
    return (
      <div className='kol' >
        <Navvv/>
        <div className='kol2'>
           <div className='mr' data-aos="fade-up">
<First/>
      </div>
      <div className='al' data-aos="fade-down">
<img src={rea} style={{objectFit:'contain',width:'100%'}}/> 
      </div>
        </div>
        <div data-aos="zoom-in">
        <Forceorder />  
        </div>
      
       <div className='kol2'>
        <div className='al2' data-aos="fade-up">
<img src={tsr2} className='pic2' style={{}}/> 
</div>
<div className='mr'data-aos="fade-down">
<Sec/>
</div>

       </div>
      
       <Footer/>
      </div>
    );
  };
  export default Reactguide;