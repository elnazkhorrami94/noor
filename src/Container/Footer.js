import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';
const Footer=()=>{
    return(
        <div>
            <div className='foot'>
                
<h4>
    طراحی شده توسط وب سایت نور
</h4>

<div className='calls'>
    <a href="https://telegram.me/noor"  target="_blank"style={{color:'black'}}><i class="fa fa-telegram" ></i></a>
    <a href="https://wa.me/+9809120323613"  target="_blank"style={{color:'black'}}><i class="fa fa-whatsapp" ></i></a>
    <a href="www.instagram/noor" target="_blank"style={{color:'black'}}><i class="fa fa-instagram" ></i></a>
    <a href="tel:+9809120323613" target="_blank" style={{color:'black'}}><i class="fa fa-phone-square" ></i></a>
</div>
            </div>
        </div>
    );
};
export default Footer;