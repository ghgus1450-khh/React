import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } 
  from 'react-router-dom';
import './App.css';

import Place from './page/Place';
import Dir from './page/Dir';
import Login from './page/Login';
import Homes from './page/Homes';
import SignIn from './page/SignIn2';

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Homes />}/>

          <Route path='/Place' element={<Place />}/>
          <Route path='/Dir' element={<Dir />}/>
          <Route path='/Login' element={<Login />}/>

          <Route path='/SignIn' element={<SignIn />}/>
        </Routes>

    </Router>
    
  );
}

export default App;
