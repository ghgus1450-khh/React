
import "chart.js/auto"
import { Legend, scales } from "chart.js/auto";
import { Chart } from "react-chartjs-2"

export default function MixChart() {

    const data = {
        labels: ["1월", "2월", "3월", "4월", "5월", "6월"],

        datasets: [

            { // 선 그래프
                type: "line",
                label: "성장률(%)",
                data: [5, 8, 6, 9, 11, 13],
                yAxisID: "y1" // 보조축 - 오른쪽
            },
            { // 막대 차트
                type: "bar", // 타입, 즉 그래프 종류 설정
                label: "매출액(만원)",
                data: [320, 410, 380, 460, 520, 610],
                yAxisID: "y" // 주축 - 왼쪽

            },


        ]
    };

    const options = {
        Plugin:{ 
            title:{ // 차트 제목
                display:true,
                text : "월별 매출액 및 성장률",
                font : {size:20, weight:"bold"}
            },
            legend:{     // 범례
                position:"bottom"
            },
            tooltip:{    // 데이터를 보여주는 말풍선
                callbacks : {
                    label:(ctx) => {
                        const label = ctx.dataset.label ;
                        const value = ctx.parsed.y;
                        return ctx.dataset.type ==="bar" ? 
                        `${label} : ${value.toLocaleString()}만원`
                        : `${label} : ${value}%`;
                    }
                }
            }
        },

        scales: { // 축 설정할거면 scales 에 묶어라..
            x:{
                title:{display:true, text:"월"}
            },
            y: { 
                position: "left",
                title:{display:true, text:"매출액(만원)"}
             },

            y1: {
                position: "right",
                grid: { drawOnChartArea: false },
                title:{display:true, text:"성장률(%)"},
                beginAtZero:true
            }
        }
    };

    return (
        <>
            <div style={{ width: 600 }}>
                <Chart data={data} type="bar" options={options} />
                {/* type에 주축이 되는 그래프를 적어준다 */}
            </div>

        </>
    );
}