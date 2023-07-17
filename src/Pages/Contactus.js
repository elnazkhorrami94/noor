import './Contactus.css';
import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navvv from '../Container/Navbar';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { Popup } from '../Component/Popup';

const Contactus = () => {
  
  const [open, setOpen] = useState(false);
  const [name, setname] = useState("");
  const [mail,setmail ] = useState("");
  const [message,setmessage ] = useState("");
  const input1 = (e) => setname(e.target.value);
  const input2 = (e) => setmail(e.target.value);
  const input3 = (e) => setmessage(e.target.value);
  const form = useRef();

  const sendEmail = (e) => {
    setname("");
    setmail("");
    setmessage("");
    e.preventDefault();

    emailjs
    .sendForm(
      'service_6xd9xa2',
       'template_roemv9o',
        form.current, 
        'UL4xJfulrI8JVE9JP')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };
  const areAllFieldsFilled = (name != "") && (mail != "") && (message != "")
  useEffect(()=>{
    Aos.init({duration:2000});
},[]);

    return (

  <div className='whole'>
    <Navvv className='bgc'/>
<div className='row'>
<div className='s1'>
<div className='color' data-aos="flip-down">
  <h1>ارتباط با ما</h1>
<form ref={form} onSubmit={sendEmail}>
    <div class="user-box">
       
      
      <input type="text" placeholder="نام" name="user_name" value={name} onInput={input1} required/>
     
    </div>
   
    <div class="user-box">
    
      <input type="email" name="user_email" required placeholder="آدرس ایمیل"value={mail} onInput={input2}/>
      
    </div>
    <div class="user-box">
     
      <textarea type="text" name="message" required placeholder="توضیحات"value={message} onInput={input3}/>
      
    </div>
   
    <button type="submit" value="Send"style={{border:'none',backgroundColor:'#96cfd500'}} 
    onClick={() => setOpen(true)} disabled={!areAllFieldsFilled}>
     
     <span></span>
     <span></span>
     <span></span>
     <span></span>
   
      ارسال پیام
 
   </button>

    {open ? <Popup text="پیام شما با موفقیت ارسال شد." closePopup={() => setOpen(false)} /> : null}
  </form>
</div>
</div>
<div className='colom'>
  <div className='row2'>
<div className='cont' data-aos="fade-down-left">
  <span className='v'> 
    <i class="fa fa-phone fa-6x"  ></i>
  </span>
  
<h4>شماره تماس</h4>
<a href="tel:+9809120323613" target="_blank" style={{textDecoration: 'none',color:'black'}}>
  <h4>09120323613</h4>
</a>

</div>
<div className='cont' data-aos="fade-down-right">
<span className='v'> 
<i class="fa fa-whatsapp fa-6x"  ></i>
</span>
<h4>شماره واتساپ</h4>
<a href="https://wa.me/+9809120323613"  target="_blank" style={{textDecoration: 'none',color:'black'}}>
  <h4>09120323613</h4>
</a>

</div>
  </div>
<div className='row2'>
<div className='cont' data-aos="fade-up-left">
<span className='v'> 
<i class="fa fa-telegram fa-6x"  ></i>
</span>
<h4>آیدی تلگرام</h4>
<a href="https://telegram.me/elnazkhorrami"  target="_blank"style={{textDecoration: 'none',color:'black'}}>
  <h2>elnazkhorrami@</h2>
</a>

</div>
<div className='cont' data-aos="fade-up-right">
<span className='v'> 
<i class="fa fa-envelope fa-6x"  ></i>
</span>
<h4>ادرس ایمیل</h4>
<a href="mailto:mail@example.com" target="_blank"style={{textDecoration: 'none',color:'black'}}>
<h2>elnazkhorrami94@gmail.com</h2>
</a>
</div>
</div>
</div>

</div>
 </div>

    );
  };
  export default Contactus;