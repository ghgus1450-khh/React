import 'chart.js/auto';
import {Bar} from 'react-chartjs-2';

export default function Barchart1(){
    
    const score = [
        {name:"이순신", avg:87},
        {name:"강감찬", avg:98},
        {name:"장보고", avg:66},
        {name:"정도전", avg:99},
        {name:"정약용", avg:81},
        {name:"한석봉", avg:54},
    ];

    // 점수순으로 내림차순으로 나타낼 때(성적, 인원수, 순위, 만족도 등) : 가로 막대
    // 레이블 (제목,이름 등) 기준에 맞춰 데이터를 보여줄 때 : 세로 막대

    const data={
        labels:score.map( (u)=> u.name ),
        datasets:[
            {
                label : "기말성적",
                data : score.map( (u) => u.avg),
                backgroundColor : "#ffcccc",
                
            }
        ]
    };

    const options={
        indexAxis:"y" // 가로축 변경
    };


    return(
        <>
            <Bar data={data}
                options={options}
            />
        </>
    );
}