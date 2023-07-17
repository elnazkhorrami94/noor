import './Buttonblack.css';
import React from 'react';
const Buttonblack=(props)=>{
    const {tittle}=props;
    const {url}=props;
    return(
        <div className='blackbutt'>
            <a href={url} style={{ textDecoration: 'none' }} className='aa'>
 <button className='bb'>{tittle}</button>
 </a> </div>

     
            
     

    )
}
export default Buttonblack;