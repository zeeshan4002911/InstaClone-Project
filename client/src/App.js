import './App.css';
import LandingPage from './Landing-page/Landing_page';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Postview from './PostView/postview';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LandingPage/>}/>
          <Route path='/postview' element={<Postview/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
