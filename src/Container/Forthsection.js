import './Forthsection.css';
import React,{ useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Forthsection=()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
<div data-aos="zoom-in">
<div className='bc'>
    <p className='why'>
   <h1 >چرا باید وب سایت داشته باشیم؟</h1>     
    </p>
<hr className='line'/>
</div>
<div className='data'>
    <div className='colered'>
      <p>
 <h4 className='basefont'>
       6.روابط جدیدی برای خود ایجاد خواهید کرد
    </h4>
    <br/>
    <h4 className='basefont'>
      7.روش‌های تبلیغات خود را گسترش دهید
    </h4> 
    <br/>
    <h4 className='basefont'>
      8.به خوبی معرفی شوید و اعتبار کسب کنید
    </h4> 
    <br/>
    <h4 className='basefont'>
      9.ایمیل اختصاصی خود را خواهید داشت
    </h4> 
    <br/>
    <h4 className='basefont'>
      10.امکان ارزیابی دقیق مخاطبان وجود دارد
    </h4> 
</p>  
    </div>
<div className='light'>
<p>
    <h4 className='basefont'>
1.امروزه تصمیمات خرید در موتور های جستجو آغاز می شوند
    </h4>
    <br/>
    <h4 className='basefont'>
        2.مشتریان جدید داشته باشید / کسب و کاری راه بیندازید
    </h4>
    <br/>
    <h4 className='basefont'>
       3.با داشتن یک سایت شما یک صدا دارید
    </h4>
    <br/>
    <h4 className='basefont'>
       4.وب سایت یک راه ارزان برای دیده شدن است
    </h4>
    <br/>
    <h4 className='basefont'>
      5.به صورت 24 ساعته در دسترس باشید
    </h4>
   
    
</p>    
</div>
</div>
</div>
    );
};
export default Forthsection;