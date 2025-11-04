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
          <Route path='/*' element={<Homes />}/> 
          {/* '/*' => 모든 페이지를 보이게 해라 */}

        </Routes>

    </Router>
    
  );
}

export default App;
