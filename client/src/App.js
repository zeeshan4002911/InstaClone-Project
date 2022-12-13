import './App.css';
import LandingPage from './Landing-page/Landing_page';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Postview from './PostView/postview';
import UploadPost from './PostView/component/UploadPost/uploadpost'

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LandingPage />} />
            <Route path='/postview' element={<Postview />} />
            <Route path='/upload' element={<UploadPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
