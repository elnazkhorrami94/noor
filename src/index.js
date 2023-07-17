import React, { StrictMode } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Contactus from './Pages/Contactus';
import Order from './Pages/Order';
import Reactguide from './Pages/Reactguide';
import Wordpressgiude from './Pages/Wordpressguide';
import reportWebVitals from './reportWebVitals';
import Starter from './Pages/Starter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
<BrowserRouter>
      <Routes>
      
        <Route index element={<App />} />
          <Route path="order" element={<Order />} />
          <Route path="Reactguide" element={<Reactguide />} />
          <Route path="Wordpressguide" element={<Wordpressgiude />} />
          <Route path="contactus" element={<Contactus />} />
       
      </Routes>
    </BrowserRouter>
</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
