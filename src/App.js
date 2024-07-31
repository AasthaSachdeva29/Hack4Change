import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Health from './pages/Health.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Input from './pages/Input.jsx';
import Traceability from './pages/Traceability.jsx';
import ProductList from './pages/Agritrace.jsx';
import { Link } from 'react-router-dom';
import Marketplace from './pages/Marketplace.jsx';
import Carbonfootprints from './pages/Carbonfootprints.jsx';
import { useState } from 'react';
import Agritrace from './pages/Agritrace.jsx';
import Market from './pages/Market.js';
//import Checkout from './pages/Checkout.jsx';


import Givemachines from './pages/Givemachines.jsx';
import Checkout from './pages/Checkout.jsx';
import GiveItem from './pages/GiveItem.jsx';
import Weather from './pages/Weather.jsx'
import Aires from './pages/Aires.jsx';
import Diseasedetect from './pages/Diseasedetect.jsx';
//import graphChart from './pages/graphChart.js';

  
const App = () => {
  
  return (
    <div>
    <div className="App" >
    
    </div>
    <BrowserRouter>
      <Sidebar>
        <Routes>
          
          <Route path="/" to="/productivity/market" />
          <Route path="/marketplace" element={<Marketplace/>} />
          <Route path="/traceability" element={<Traceability />} />
          <Route path="/productivity/market" element={<Market />} />
          <Route path="/productivity" element={<Market />} />
          <Route path="/productivity/agritrace" element={<Agritrace />} />
          <Route path="carbonfootprints" element={<Carbonfootprints/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/giveitem" element={<GiveItem/>} />
          
          
          <Route path="/givemachines" element={<Givemachines/>} />
          <Route path="/weather" element={<Weather/>} />
          <Route path="/aires" element={<Aires/>} />
          <Route path="/disease" element={<Diseasedetect/>} />

          
          
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </div>
  );
};

export default App;
