import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

export default function TodoList (){

    const [todo, setTodo] = useState([
        {id: 1, text: "책읽기", done: false},
        {id: 2, text: "방청소하기", done: false},
        {id: 3, text: "리액트 수업", done: true},
        {id: 4, text: "프로젝트 주제선정", done: true},
        {id: 5, text: "상세페이지 구상", done: true},
        {id: 6, text: "웹디자인공부", done: false},
        {id: 7, text: "밥 많이 먹기", done: false},
        {id: 8, text: "커피 많이 마시기", done: true}
    ]);

    const [filter, setFilter] = useState("all");
    // all - 전체, active - 진행중, done - 완료

    // 남은 개수 구하기 함수(done값의 true를 걸려내야한다)
    const remaining = todo.filter( t => !t.done ).length; // false 인 것만 추출

    //filter 함수로 걸러주기 (전체, 진행중, 완료)
    // useMemo : 불필요하지 않은 랜더링 방지할 때 사용된다 (값이 변경될 때만 랜더링)
    const todoFilter = useMemo( () => {
        if(filter === "active") return todo.filter(t => !t.done);
        if(filter === "done") return todo.filter(t => t.done);
        return todo;
    }, [todo, filter] );

    // 체크박스 클릭하면 체크되거나 해제되거나 둘 중 하나
    const toggle = (id) => {
        setTodo(todo.map( t => (t.id===id ? 
            {...t,done : !t.done} : t)))
            // true 였다면 false로 아님 그 반대로.. : 아님 그대로 유지
            // ...t → 객체 t의 모든 속성을 펼쳐서 복사한다!
        };

    return(
        <>
            <Link to="/" className="home">HOME</Link>
            <div>
                <h2> 할 일 리스트 </h2>
                <div>
                    <strong>남은 할 일 : {remaining} 개 </strong>
                </div>
                <div>
                    <button onClick={()=>setFilter("all")}>전체</button>
                    <button onClick={()=>setFilter("active")}>진행중</button>
                    <button onClick={()=>setFilter("done")}>완료</button>
                </div>

                <ul>
                    {
                        todoFilter.map(
                            (t) => (
                                <li>
                                    <span>{t.text}</span>
                                    <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)}/>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        </>
    );
}