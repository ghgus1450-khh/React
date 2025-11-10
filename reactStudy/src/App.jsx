import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// 컴포넌트 import
import MainMenu from './component/MainMenu'
import Info from './component/study1/Info'
import Board from './component/study1/Board'
import Member from './component/study1/Member'
import Store from './component/study1/Store'
import Schedule from './component/study2/Schedule'
import Student from './component/study2/Student'
import Memo from './component/study2/Memo'
import Buyer from './component/study3/Buyer'
import TestEffect from './component/study3/TestEffect'
import TestFetch from './component/study3/TestFetch'
import PorjName from './component/study3/ProjName'
import PorjHeart from './component/study3/ProjHeart'
import DataList from './component/study4/DataList'
import DataList2 from './component/study4/DataList2'
import UserInfo from './component/study4/UserInfo'
import TodoList from './component/study4/TodoList'


function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={ <MainMenu /> }/>
          <Route path="/propstate" element={ <Info/>}/>
          <Route path="/boardMake" element={ <Board/>} />
          <Route path="/member" element={ <Member/>} />
          <Route path="/store/*" element={ <Store />} />
          <Route path="/schedule" element={ <Schedule />} />
          <Route path="/studentname" element={ <Student />} />
          <Route path="/simplememo" element={ <Memo />} />
          <Route path='/productBuy/*' element={<Buyer />} />
          <Route path='/effect1' element={<TestEffect />} />
          <Route path='/TestFetch' element={<TestFetch />} />
          <Route path='/PorjName' element={<PorjName />} />
          <Route path='/PorjHeart' element={<PorjHeart />} />
          <Route path='/map1' element={<DataList />}/>
          <Route path='/map2' element={<DataList2 />}/>
          <Route path='/users' element={<UserInfo />}/>
          <Route path='/todo' element={<TodoList />}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
