import { useState } from 'react'
import './App.css'

// 컴포넌트
import ChartBasic1 from './component/ChartBasic';
import Barchart1 from './component/Barchart1';
import Barchart2 from './component/Barchart2';
import Barchart3 from './component/Barchart3';
import LineChart1 from './component/LineChart1';
import LineChart2 from './component/Linechart2';
import LineChart3 from './component/LineChart3';
import LineChart4 from './component/LineChart4';
import DoughnutChart1 from './component/DoughnutChart';
import PiChart from './component/PiChart';
import DoughnutChart2 from './component/DoughnutChart2';
import DoughnutChart3 from './component/DoughnutChart3';




function App() {

  const [show, setShow] = useState(null);

  const btClass = (name) =>
    `px-6 py-2 rounded-lg text-white font-bold transition cursor-pointer 
      ${show === name ? "bg-blue-600" : "bg-blue-400 hover:bg-blue-500"}`;

  return (
    <>
      <div className='flex gap-3'>
        <button onClick={() => setShow("A")} className={btClass("A")}>차트 둘러보기</button>
        <button onClick={() => setShow("B")} className={btClass("B")}>가로 막대</button>
        <button onClick={() => setShow("C")} className={btClass("C")}>범주 막대</button>
        <button onClick={() => setShow("D")} className={btClass("D")}>누적 막대</button>
        <button onClick={() => setShow("E")} className={btClass("E")}>기본 라인</button>
        <button onClick={() => setShow("F")} className={btClass("F")}>다중 라인</button>
        <button onClick={() => setShow("G")} className={btClass("G")}>계단 라인</button>
        <button onClick={() => setShow("H")} className={btClass("H")}>곡선 라인</button>
        <button onClick={() => setShow("I")} className={btClass("I")}>기본 도넛</button>
        <button onClick={() => setShow("J")} className={btClass("J")}>원형 도넛</button>
        <button onClick={() => setShow("K")} className={btClass("K")}>반 도넛</button>
        <button onClick={() => setShow("L")} className={btClass("L")}>도넛 진행바</button>
      </div>
      
      <div className='mt-8'>
        {/* 단일 조건 연산자 */}
        {show === "A" && <ChartBasic1 />}
        {show === "B" && <Barchart1 />}
        {show === "C" && <Barchart2 />}
        {show === "D" && <Barchart3 />}
        {show === "E" && <LineChart1 />}
        {show === "F" && <LineChart2 />}
        {show === "G" && <LineChart3 />}
        {show === "H" && <LineChart4 />}
        {show === "I" && <DoughnutChart1 />}
        {show === "J" && <PiChart />}
        {show === "K" && <DoughnutChart2 />}
        {show === "L" && <DoughnutChart3 />}
      </div>
    </>
  );
}

export default App
