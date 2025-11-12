import 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
import { data } from 'react-router-dom';


export default function DoughnutChart() {



    const data = {
        labels: ["웹개발", "AI", "데이터시각화", "게임개발"],
        datasets: [
            {
                label: "과정비율",
                data: [40, 20, 25, 15], // 백분율 계산하기
                backgroundColor: ["#B7F0B1", "#B2EBF4", "#FFA7A7", "#FFB2D9"] // 데이터의 갯수에 맞춰 색이 지정된다 (맞게 넣지 않는다면 색이 계속 반복된다) 
            }
        ]
    };

    return (
        <>
            {/* 차트를 태그로 감싸줘서 크기, 위치 조정해준다 */}
            <div style={{width:400}} className='mx-auto'> 
                <Doughnut data={data} />
            </div>
        </>
    );
}

/*
        기본 도넛 차트 : 원의 가운데 비어있는 도넛 모양의 차트
                    비율형 데이터 시각화에 사용
                    매출 비중, 사용자 비율, 점유율 등

        원형 차트 : 도넛과 비슷하지만 가운데 뚫려 있지 않음
                비율형 데이터 시각화에 사용, 도넛과 비슷

        => 도넛 차트 안에 원형 차트를 넣어 두가지의 데이터를 보여줄 수도 있다

        반 도넛 차트 : 도넛을 반원으로 표시
                진행률, 만족도, 점수 시각화에 활용

        멀티 도넛 차트 : 여러 데이터를 겹쳐서 표현
                        남녀비율+ 전체 등록자수

        도넛 진행바 차트 : 반도넛 모양에 단일 데이터 진행률 시각화

*/