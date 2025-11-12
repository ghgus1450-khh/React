
import "chart.js/auto";
import { Line } from "react-chartjs-2"

export default function LineChart1() {

    const step = [
        { day: 4, stepNumber: 3408 }, { day: 5, stepNumber: 5402 },
        { day: 6, stepNumber: 4562 }, { day: 7, stepNumber: 4025 },
        { day: 8, stepNumber: 5028 }, { day: 9, stepNumber: 7895 },
        { day: 10, stepNumber: 8452 }, { day: 11, stepNumber: 2221 },
        { day: 12, stepNumber: 3458 }, { day: 13, stepNumber: 7524 },
    ];

    // 외부 데이터 받았다면 필요한 데이터를 확보하기 위한 가공작업이 필요하다

    const days = step.map((d) => d.day);
    const steps = step.map((d) => d.stepNumber);

    // 일별 걸음수를 라인 그래프로 표현하기

    // steps에서 최댓값과 최소값을 찾아준다
    const stepMax = Math.max(...steps);
    const stepMin = Math.min(...steps);

    // 최댓값과 최소값의 데이터가 몇번쨰 인덱스에 있는지 찾는다(위치지정) 
    const maxIndex = steps.indexOf(stepMax); // indexOf : 데이터가 몇번째 인덱스인지 찾아준다
    const minIndex = steps.indexOf(stepMin);

    const data = {
        labels: days,
        datasets: [ // 배열이니깐 대괄호 잊지 말자 젭알...

            // 최고점과 최저점을 기존 그래프보다 앞으로 보내고 싶을 떄 데이터 정렬의 순서를 변경해줘도 된다
            {
                label:"최고점",
                data : steps.map( (v, i) => (i===maxIndex ? v : null)), // 매개변수 2번째에 가지는 i 는 인덱스를 나타낸다
                backgroundColor : "#ff0000",
                borderColor : "transparent",
                pointBackgroundColor : "#ff0000", // 포인트 색 지정
                pointRadius : 9, // 포인트 크기
                pointStyle:"rectRot", // 포인드 모양 설정
            },
            {
                label:"최저점",
                data: steps.map((v,i)=> (i===minIndex ? v : null ) ),
                backgroundColor : "#0054ff",
                borderColor : "transparent",
                pointBackgroundColor: "#0054ff",
                pointRadius : 9,
                pointStyle:"triangle",
            },
            {
                label: "걸음수",
                data: steps, 
                tension:0.1,
                pointBackgroundColor :"transparent",
                borderColor:"#ccaaee",
                borderWidth:2,
            }
        ]
    };


    const options = {};


    return (
        <>
            <Line data={data} options={options} />

        </>
    );
}

/*
    기본 라인 그래프 
    - 시간이나 순서에 따른 데이터 변화를 선으로 연결한 가장 기본 선 그래프
    - 월별 매출 추이, 일별 방문자수, 일별 걸음수 등등

    다중 선 그래프
    - 두개 이상의 데이터 셋을 한 그래프에 여러 색상의 선으로 표현
    - 제품들의 월별 매출 비교, 동종 업계 순이익 비교

    계단형 선 그래프
    - 값이 갑자기 변하는 구간을 계단 모양으로 표시
    - 단계별 요금제 변화, 구간별 누적량 등등

    곡선형 선 그래프
    - 선을 부드럽게 연결하여 곡선 형태로 표현
    - 온도나 주가를 점진적인 변화 시각화
    점선 선 그래프, 면적형 선 그래프, 그라데이션 선 그래프





*/