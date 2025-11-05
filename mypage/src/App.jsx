import React from 'react';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import './App.css'
import Home from './pages/Home2';
import Portfolo from "./pages/Portfolo";
import Contect from './pages/Contect';
import HomeIndex2 from './pages/HomeIndex2';
import About from './pages/About';
import Welcome from './pages/Welcome';
import Counter from './pages/Counter';
import ProfileCard from './pages/ProfileCard';
import LikeButton from './pages/LikeButton';

function App() {
  return (
    <>
      <Welcome name="강호현" age="24" />
      <Counter  />

      <ProfileCard name="홍길동" age="56" hobby="음악 감상" />
      <LikeButton />

      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
            {/* Route 안에 또다른 자식 Route를 추가하여 만들 수 있다
            이 자식들은 Outlet가 위치된 곳으로 향한다 */}
            <Route index element={<HomeIndex2 />} />
            <Route path='About' element={<About />} />
            <Route path='Contect' element={<Contect />} />
          </Route>

          <Route path='/Portfolo' element={<Portfolo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
