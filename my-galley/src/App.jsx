// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import img1 from './img/store01.png';
import img2 from './img/store2.png'; // 리엑트에서 사진을 변수에 담아두고 사용해야한다

function App() {

  return (
    <div className='imgBox'>
        <img src={img1} alt="이미지1" className='image' />
        <img src={img2}  alt="이미지2" className='image' />
    </div>
  )
}

export default App
