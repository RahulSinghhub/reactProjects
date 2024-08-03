import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Products from './Products';
import Customer from './Customer';
import Popup from './popup';

function App() {
  return (
    <div>
      <Customer />
      <Popup/> 
      <Products />
    </div>  
    
  );
}

export default App;
