import React from "react";
import "./Popup.css";
import 'font-awesome/css/font-awesome.min.css';
export const Popup = ({ text, closePopup }) => {
  return (
    <div className="popup-container" autoHideDuration={6000} onClick={closePopup}>
     <div className="popup-body" autoHideDuration={6000}>
     <i class="fa fa-check-circle-o" aria-hidden="true"></i> 
     <h6>  {text}</h6>
    
     </div>
    </div>
  );
};