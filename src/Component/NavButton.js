
import './NavButton.css';
import React from 'react';
const NavButton=(props)=>{
    const {tittle}=props;
    return(
<button className='but'>
{tittle}
</button>
    )
}
export default NavButton;