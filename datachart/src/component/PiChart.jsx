import 'chart.js/auto'
import { Pie } from 'react-chartjs-2'

export default function PiChart() {

    const usage = [234, 194, 257, 310, 115, 129];
    const total = usage.reduce((a, c) => a + c, 0); // 배열 안에 있는 데이터를 하나씩 꺼내서 백분율 사용한다
    const pctUsage = usage.map( v => (v / total * 100 ).toFixed(1));

    // toFixed 는 소수점 자릿수를 고정하여 문자열로 반환
    // 숫자로 유지하려면 parseFloat으로 다시 변환

    const labels = ["크롬", "사파리", "파이어폭스", "엣지", "스윙", "웨일"];

    const data = {
        labels,
        datasets: [
            {
                label: "브라우저사용량 %",
                data: pctUsage
            }
        ]
    };

    return (
        <>
            <div style={{ width: 400 }} className='mx-auto'>
                <Pie data={data} />
            </div>
        </>
    );
}