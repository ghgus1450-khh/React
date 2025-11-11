import "chart.js/auto";
import {Bar} from "react-chartjs-2"

export default function Barchart3 (){

    // 요일별 디바이스별 페이지 방문량
    const visit = [
        { week:"월요일", pc:54, mobile:24, tablets:45 },
        { week:"화요일", pc:67, mobile:34, tablets:11 },
        { week:"수요일", pc:13, mobile:36, tablets:12 },
        { week:"목요일", pc:71, mobile:27, tablets:27 },
        { week:"금요일", pc:36, mobile:29, tablets:30 },
        { week:"토요일", pc:45, mobile:33, tablets:108 },
        { week:"일요일", pc:58, mobile:37, tablets:23 }
    ];
     
    const [week, pc, mobile, tablets] = [
        visit.map( (d) => d.week ),
        visit.map( (d) => d.pc ),
        visit.map( (d) => d.mobile ),
        visit.map( (d) => d.tablets )
    ]

    const data = {
        labels: week,
        datasets: [
            {
                label:"pc",
                data : pc,
            },
            {
                label:"mobile",
                data : mobile,
            },
            {
                label: "tablet",
                data : tablets,
            }
        ]
    };

    const options = {
        
        scales:{
            x:{ stacked : true },
            y:{ stacked : true }
        }
        
    };

    return(
        <>
            <Bar data={data} options={options} />
        </>
    );
}
