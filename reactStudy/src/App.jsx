import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// 컴포넌트 import
import MainMenu from './component/MainMenu';
import Info from './component/study1/Info';

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<MainMenu />} />
          <Route path='/propstate' element={<Info />}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
