import 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
import { data } from 'react-router-dom';


export default function DoughnutChart2() {

    const data = {
        label:["프로젝트진행률"],
        datasets : [
            {
                label : "1팀",
                data:[15,85], // 15% 진행하였고 85% 남았다면
                cutout:"70%", // 70% 잘라내라
            }
        ]
    };

    const options ={
        rotation: 0, // 시작 각도 : 위에서부터 시계방향 / 반시계방향은 - 마이너스
        circumference : 180 // 시작 각도에서 몇도까지 그리나?
    }

    return (
        <>
            <div style={{width:400}} className='mx-auto'>
                <Doughnut data={data} options={options} />
            </div>
          
        </>
    );
}
