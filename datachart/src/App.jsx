import { useState } from 'react'
import './App.css'

// 컴포넌트
import ChartBasic1 from './component/ChartBasic';
import Barchart1 from './component/Barchart1';
import Barchart2 from './component/Barchart2';
import Barchart3 from './component/Barchart3';




function App() {

  const [show, setShow] = useState(null);

  const btClass = (name) =>
    `px-6 py-2 rounded-lg text-white font-bold transition cursor-pointer 
      ${show === name ? "bg-blue-600" : "bg-blue-400 hover:bg-blue-500"}`;

  return (
    <>
      <div className='flex gap-3'>
        <button onClick={() => setShow("A")} className={btClass("A")}>차트 둘러보기</button>
        <button onClick={() => setShow("B")} className={btClass("B")}>막대 그래프 1</button>
        <button onClick={() => setShow("C")} className={btClass("C")}>막대 그래프 2</button>
        <button onClick={() => setShow("D")} className={btClass("D")}>막대 그래프 3</button>
      </div>
      
      <div className='mt-8'>
        {/* 단일 조건 연산자 */}
        {show === "A" && <ChartBasic1 />}
        {show === "B" && <Barchart1 />}
        {show === "C" && <Barchart2 />}
        {show === "D" && <Barchart3 />}
      </div>
    </>
  );
}

export default App
