import './Thirdsection.css';
import * as react from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ph from'../Assets/Images/tree.png';
import Shoppingcontext from '../Component/Shoppingcontext';
import Companycontext from '../Component/Companycontext';
const img = require('../Assets/Images/bg1.png');
const divStyle = {
    width: '100%',
    height: 'auto',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover'
  };
const Thirdsection=()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
<div >
    <div style={divStyle} className='w'>
        <div className='divpicture'data-aos="fade-down"
    >
<img  src={ph} className='imageph' style={{}}/>
    </div>
    <div className='context' data-aos="fade-up">
        <div className='div1'>
            
            <div className='tozihat'>
              <Shoppingcontext/>  
             
          
                
                </div>
        </div>
        <div className='div2'>
       
            <div className='tozihat'>
           <Companycontext/>   
                </div>
        </div>
    </div>
    
    </div>
</div>
    );
};
export default Thirdsection;