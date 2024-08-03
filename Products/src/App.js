import './App.css';
import Headers from './functions/Header';
import ProductsList from './functions/ProductsList';
import Footers  from './functions/Footers';
import { useState } from 'react';
 function App() {
  const [medi,setMedi] = useState(["Liquid", "Tablet", "Capsules", "Injections"]);
  return (
    <div>
      <Headers></Headers>
      <ProductsList val="medi"> </ProductsList>
      //MedicineForm...............
      <Footers></Footers>
    </div>
  );
}

export default App;
