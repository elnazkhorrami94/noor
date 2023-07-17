import Navvv from '../Container/Navbar';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Container/Footer';
import './Wordpressguide.css';
import React from 'react';
import wp from '../Assets/Images/wwp.png'
import Forceorder from '../Component/Forceorder';
import coding from '../Assets/Images/coding-interview.webp';
import Seccon,{ Firstcon } from '../Component/Wordpressguidecontext';
import {Head} from '../Component/Wordpressguidecontext';
const Wordpressgiude = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
},[]);
    return (
      <div >
        <Navvv/>
        <div className='all'>
<div className='firstrow'>
<div className='whw'>
<Head/>
</div>
<div className='imw' data-aos="fade-down">
<img src={wp} className="png"/> 
</div>
</div>
<div className='secrow' data-aos="fade-down">

<Firstcon/>
</div>
<div data-aos="zoom-in">
<Forceorder />  
</div>

<div className='throw' data-aos="fade-up">
<div className='whw'>
<Seccon/>
</div>
<div className='imw'>
<img src={coding} className="png"/> 
</div>
</div>
</div>
        <Footer/>
      </div>
      
    );
  };
  export default Wordpressgiude;