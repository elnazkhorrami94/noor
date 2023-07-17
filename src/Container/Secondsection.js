import './Secondsection.css';
import * as React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'font-awesome/css/font-awesome.min.css';
const Secondsection =()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
<div data-aos="fade-down">
    <div className='services'>
<h1>خدمات</h1>
<h3 className='basefont'>ما استراتژی های پشتیبانی،طراحی و مدیریت سایت را به مشتریان خود ارائه می دهیم و از ابتدای کار تا انتهای آن در کنار شما خواهیم بود</h3>
    </div>
    <div className='cards'>
<div className='card1'data-aos="zoom-in-left">
    <p className='logomiddle'><i class="fa fa-object-group fa-6x"  ></i> </p>

<h2 className='basefont'>طراحی </h2>
<br></br>
<h3 className='basefont'>طراحی وب سایت مورد نظرتون با رنگ و مدل دلخواه شما</h3>
</div>
<div className='card1' data-aos="zoom-in">

    <p className='logomiddle'> <i class="fa fa-pie-chart" ></i></p>

<h2 className='basefont'>ساخت</h2>
<br></br>
<h3 className='basefont'>در کمترین زمان ممکن وب سایت مورد نظر شما آماده و قابل بهره برداری میباشد</h3>
</div>
<div className='card1'data-aos="zoom-in-right">
    <p className='logomiddle'><i class="fa fa-line-chart"></i></p>
<h2 className='basefont'>پشتیبانی</h2>
<br></br>
<h3 className='basefont'>پشتیبانی از وب سایت شما از دو ماه تا مدت زمان دلخواهتان</h3>
</div>
    </div>
</div>
    );
};
export default Secondsection;