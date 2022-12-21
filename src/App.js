import React from 'react';
import './App.css';
import Home from './Home';
import Hobby from '../src/components/pages/Hobby'
import Contact from '../src/components/pages/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from './components/common/Wrapper';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Wrapper />} >
            <Route path="home" element={<Home />} />
            <Route path="hobby" element={<Hobby />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
