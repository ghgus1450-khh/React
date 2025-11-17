import { useState, useEffect } from 'react'
import BarChartCard from './BarChartCard';


function ExpendList() {

    const [expendList, setExpenList] = useState([]);
    const [money, setMoney] = useState(0);
    const [detall, setDetall] = useState("");
    const [day, setDay] = useState("");
    const [showChart, setShowChart] = useState(false);
    const [chartData, setChartData] = useState(null); // 막대 차트 데이터에 전송할 거

    useEffect(() => {
        const jsonData = localStorage.getItem("expendList");
        if(jsonData){
            setExpenList(JSON.parse(jsonData));
        }
    },[]);
    
    

    function handleAdd() {

        if (!money || !day) {
            alert("금액과 날짜는 반드시 입력"); return;
        };


        const newItem = {
            id: Date.now(), money: Number(money), detall, day
        };

        setExpenList((p) => {
             
            const newData = [...p,newItem] ;
            localStorage.setItem("expendList",JSON.stringify(newData));

            return newData;
        }
        );

        // setExpenList((p) => [...p, newItem]);
        setMoney(0);
        setDetall("");

        console.log(expendList);
    };

    //차트버튼을 클릭하면 동작할 함수
    const chartActive = () => {
        if (expendList.length === 0) {
            alert("등록된 내역이 없다! 쯧..");
            return;
        }

    // 날짜별 지출 총금액을 막대 그래프로 표현
    const totalByDate = expendList.reduce((a,c) => {
        if( !a[c.day] ) a[c.day] = 0;
        a[c.day] += c.money; 
        return a; // "2025-11-09" : 150000
    }, {});

     /*  exp =[ day:"2025-11-09",money:15000 
                day:"2025-11-04",money:3000 ,
                day:"2025-11-10",money:40000 
                ] 
        a[day] += money => "2025-11-09" : 18000
        a[day] = a[day] + money
     */

        // totalByDate = {"2025-11-09" : 15000, }
        const labels = Object.keys(totalByDate).sort();
        const data = labels.map((d) => totalByDate[d]);
        const label = "날짜별 지출 합계";

        setChartData( { labels, data, label });
        setShowChart(true);
    };

    return (
        <div>
            <div className='inputBox'>
                <div className='ExpList'>
                    <div>
                        <label htmlFor="money">금액 : </label>
                        <input name='money' type='number' value={money} placeholder='금액을 입력하세요' onChange={(e) => setMoney(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="detall">내용 : </label>
                        <input name='detall' type='data' value={detall} onChange={(e) => setDetall(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor='day'>날짜 :</label>
                        <input name='day' type="date" value={day} onChange={(e) => setDay(e.target.value)} />
                    </div>


                    <button className='inputbutton' onClick={handleAdd}>등록</button>
                </div>

            </div>


            <div className='chartBox'>
                {
                    showChart ? 
                    <BarChartCard labels={chartData.labels} data={chartData.data} label={chartData.label} /> : 
                    <button className='Chartbutton' onClick={chartActive} >차트</button>
                }
            </div>

        </div>

    );
}

    /*
        (a)+(c)
         0 + 1
         1 + 2
         3 + 3
         6 + 4
        10+ 5

        num = [1,2,3,4,5]  1부터 5까지 총합
        num.reduce( (a,c) => {
           a+=c; = a = a + c
           return a; 
        },0 )
    
    */

export default ExpendList;