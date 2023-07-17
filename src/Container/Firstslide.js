import * as React from 'react';
import '../App.css';
import image from '../Assets/Images/13.png';
import image2 from '../Assets/Images/316313.png';
import image3 from '../Assets/Images/3170748.png';
import image4 from '../Assets/Images/Circle-icons-brush-pencil.svg.png';
import image5 from '../Assets/Images/rp.png';
import image6 from '../Assets/Images/wwp.png';
function Firstslide() {
  return (
   
    <div className="paper">  
 <div className="slideone slides">


  <div className='divmoarefi'>
     <h3 className='h'>
    طراحی سایت نور 
    </h3> 
     <h4 className='h'>  
        طراحی انواع سایت های شرکتی و فروشگاهی شما
      </h4>    
 
  </div>
    
  
  <div className='divmoarefiax'>
    <img src={image5} className="wrp"/> 
  
    <img src={image6} className="wrp"/> 
  </div>
    
 
   </div>
    
 
   

 
<div className="slidetwo">
 
<div className='fig'>
    <img src={image2} className="ico1"/> 
  <caption className='cap'>مدرن </caption>
</div>
  

  
 
 
 
<div className='fig'>
<img src={image3} className="ico1"/>
<caption className='cap'> ایمن</caption>
</div>
<div className='fig'>
<img src={image4} className="ico1"/>
<caption className='cap'> زیبا </caption>
</div>


<div className='divph'>
  <img src={image} className="photo"/>
  </div>
  



      </div>
   </div>
  );
}

export default Firstslide;
