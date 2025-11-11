
import "chart.js/auto";
import { plugins, Tooltip } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function ChartBasic(){
    
    // data : 무엇을 그릴지, 데이터 구조
    const data = {
        labels:["1월","2월","3월"], // X축 입력
        datasets:[
            {
                label : "매출", // 데이터 종류
                data : [100,50,200], // 데이터 값
                backgroundColor : "rgba(99,192,241,0.5)", // 막대 그래프의 색
                borderColor : "rgba(99,102,241,1)", // 표의 테두리 선 색
                borderWidth : 1 // 테두리 선의 굵기
            }
        ]
    };

    // options : 어떻게 그릴지, 옵션 구조
    const options = {
        responsive: true, // 창의 크기에 따라 그래프가 자동으로 크기조절(반응형)
        maintainAspectRatio : true, // 그래프의 가로세로 비율 유지
        plugins:{ // 차트의 제목, 범례, 툴팁 등 설정
            title:{ display: true, text : "월별현황"}, // 차트의 제목
            legend:{display: true, position:"left"}, // 범례 (위치 잡는 거)
            tooltip:{enabled:true, mode:"index", intersect:false} // 말풍선 설정 
            // intersect : 근처에 가도 해당 그래프의 말풍선을 띄어주는 역할 ( false 일 때, true는 그래프에 직접 가야 뜸)
        },
        scales:{
            x:{
                title:{display:true, text:"월"}
            },
            y:{
                title:{display:true, text:"매출액(만원)"}
            }
        }
    };

    return(
        <>
            <Bar data={data} 
            
            options={options} />
        </>
    );
}


