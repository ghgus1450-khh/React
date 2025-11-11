import 'chart.js/auto';
import { scales } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export default function Barchart2(){

    const score = [
        {name:"강호현" , score1:78, score2: 98},
        {name:"김정원" , score1:65, score2: 55},
        {name:"박승찬" , score1:31, score2: 22},
        {name:"이예준" , score1:90, score2: 89},
        {name:"이윤서" , score1:67, score2: 56},
    ];

    // 방법 1
    // const names = score.map( (u) => u.name ) ;
    // const score1 = score.map( (u) => u.score1 ) ;
    // const score2 = score.map( (u) => u.score2 ) ;

    //방법 2
    const [names, score1, score2] = [
        score.map( (u) => u.name ),
        score.map( (u) => u.score1 ),
        score.map( (u) => u.score2 )
    ];

    // 두 데이터 그래프 표현 방법
    const data = {
        labels: names,
        datasets : [
            {
                label:"중간고사",
                data:score1,
                yAxisID:"y",
                backgroundColor:"#6799FF"
            } , { 
                label:"기말고사",
                data:score2,
                yAxisID:"y1",
                backgroundColor:"#FF9436"
            }
        ]
    };

    const options = {
        scales:{
            y:{
                position:"left"
            },
            y1:{
                position:"right",
                grid: { drawOnChartArea : false } // 격자 중복 방지
            }
        }
    };

    return(
        <>
            <Bar data={data} options={options} />
        </>
    );
}