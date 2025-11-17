import { Chart as ChartJS } from "chart.js/auto";
import { scales } from "chart.js/auto";
import {Bar} from "react-chartjs-2";


// 데이터 표시 위한 작업
import ChartDateLabels from "chartjs-plugin-datalabels" // 추가 설치
ChartJS.register(ChartDateLabels);

import plugin from "chartjs-plugin-datalabels";

export default function BarChartCard({labels,data,label}){ // (props) -> props.expendList

    const chartData={
        labels,
        datasets:[
            {
                label,
                data
            }
        ]
    };

    const options={
        plugins:{
            datalabels:{
                display:true, // 화면표시
                color:"#222", // 데이터 글자색
                anchor:"end", // 위치 기준점( "end" -> 막대의 끝 )
                // start, center, auto

                align:"end",  // 막대 위쪽에 표시
                // start, centerm end, auto, right, left, top, bottom

                font:{size:18, weight:"bold"},
                formatter:(v) => {
                    return v.toLocaleString() + "원";
                }
            }
        },
        scales:{
            y:{
                min:(data.reduce((a,c) => a+c) / data.lenght) - Math.min(...data),
                max:Math.max(...data) + (data.reduce((a,c) => a+c) / data.lenght),
                ticks:{
                    stepSize : 2000,
                    callback:(val) => val.toLocaleString()+"원", // 축 쪽에 설계
                } 
            }
        }
    };

    return(
        <>
            <Bar data={chartData} options={options}/>
        </>
    );
}