import Navvv from "../Container/Navbar";
import './Order.css';
import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { Popup } from '../Component/Popup';
const Order = () => {
	const [open, setOpen] = useState(false);
	const [name, setname] = useState("");
	const [mail,setmail ] = useState("");
	const [number,setnumber] = useState("");
	const [company,setcompany ] = useState("");
	const [message,setmessage ] = useState("");
	const input1 = (e) => setname(e.target.value);
	const input2 = (e) => setcompany(e.target.value);
	const input3 = (e) => setmail(e.target.value);
	const input4 = (e) => setnumber(e.target.value);
	const input5 = (e) => setmessage(e.target.value);
	const form = useRef();
	const [kind, setkind] = useState('');
	const [fore, setfore] = useState('');

	const sendEmail = (e) => {
	  setname("");
	  setmail("");
	  setmessage("");
	  setnumber("");
	  setcompany("");
	  e.preventDefault();
  
	  emailjs
	  .sendForm(
		'service_6xd9xa2',
		 'template_tvi0lfs',
		  form.current, 
		  'UL4xJfulrI8JVE9JP')
		.then((result) => {
			console.log(result.text);
			console.log("message sent")
		}, (error) => {
			console.log(error.text);
		});
	};
	const areAllFieldsFilled = (name != "") && (mail != "") && (message != "")&& (number!="")
  useEffect(()=>{
    Aos.init({duration:2000});
},[]);
    return (
      <div>
        <Navvv/>
		<div className="both">

		
        <div class='wrapper' data-aos="zoom-in">
			<div class='company-info'>
				<h3>طراحی سایت نور</h3>
				<ul>
					<li><i class="fa fa-road"></i> تهران</li>
					<li><i class="fa fa-phone"></i> 09120323613</li>
					<li><i class="fa fa-envelope"></i> elnazkhorrami94@gmail.com</li>
				</ul>
		</div>
		<div class='contact'>
			<h3>سفارش آنلاین</h3>
			<h6>لطفا قبل از سفارش قسمت راهنمای سفارش را مطالعه کنید.</h6>
			<form ref={form} onSubmit={sendEmail}>
				<p>
					<label>نام</label>
					<input type="text" name="user_name" value={name} onInput={input1} required/> 
				</p>

				<p>
					<label>نام شرکت</label>
					<input type="text" name="user_company" value={company} onInput={input2} /> 
				</p>

				<p>
					<label> آدرس ایمیل</label>
					<input type="email" name="user_email" value={mail} onInput={input3} /> 
				</p>

				<p>
					<label> شماره تماس</label>
					<input type="text" name="user_number" value={number} onInput={input4} required/> 
				</p>
				<p>
					<label> نوع وب سایت </label>
					<select
      value={kind} 
	  name={kind}
      onChange={e => setkind(e.target.value)}
    >
      <option value="wp">وردپرس</option>
      <option value="react">ری اکت</option>
      
    </select>
  
				</p>
				<p>
					<label> کاربرد وب سایت </label>
  <select
      value={fore} 
	  name={fore}
      onChange={e => setfore(e.target.value)}
    >
      <option value="corporate">شرکتی</option>
      <option value="shopping"> فروشگاهی</option>
      
    </select>
				</p>
				<p class='full'>
					<label>توضیحات</label>
					<textarea name="message" value={message} onInput={input5}  rows="5"></textarea> 
				</p>

				<p class='full'>
					<button type="submit" value="Send" onClick={() => setOpen(true)} disabled={!areAllFieldsFilled}>ثبت سفارش</button>
					{open ? <Popup text="پیام شما با موفقیت ارسال شد." closePopup={() => setOpen(false)} autoHideDuration={6000} /> : null}
				</p>
			</form>
		</div>
	</div>
	</div>
      </div>
    );
  };
  export default Order;