import * as React from 'react';
import './App.css';
import Navvv from './Container/Navbar';
import Firstsection from './Container/Firstsection';
import Secondsection from './Container/Secondsection';
import Thirdsection from './Container/Thirdsection';
import Forthsection from './Container/Forthsection';
import Fifthsection from './Container/Fifthsection';
import Footer from './Container/Footer';
function App() {
  return (
   
    <React.StrictMode >
      <Navvv/>
     
      <Firstsection/>
      <Secondsection/>
      <Thirdsection/>
      <Forthsection/>
      <Fifthsection/>
      <Footer/>
      </React.StrictMode>

  
  );
}

export default App;
