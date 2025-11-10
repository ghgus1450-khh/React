import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function DataList() {

    const names = [
        // 객체 형태로 담아줘야 고유 id를 부여할 수 있다
        {id:1, name: "이순신"},
        {id:2, name: "강감찬"},
        {id:3, name:"이성계"},
        {id:100, name :"박문수"},
        {id:154, name: "문익점"},
        {id:7, name: "최영"}
    ];

    // for (var n of names) {
    //     `<div>${n}</div>`
    // }
    if(names.length == 0)
        return <div>저장된 데이터가 없습니다</div>;


    return (
        <>
            <ul>
                {/* name.map( () => ( ) )  
                    name.map( () => { } )
                    map 함수는 배열을 순회 할 수 있는 함수이다.
                    map 안의 화살표 함수에는 매개변수를 두어야 배열의 데이터 하나씩
                    하나씩 꺼내올 수 있다    
                */}
                {names.map( (n) => ( 
                    <li key={n.id}>{n.name}</li>
                 ))}
            </ul>
        </>
    )
}

{/* name.map( () => ( ) ) 실행할 내용이 하나일 때 소괄호로 사용한다(무조건 하나만 있어야 한다)

        function a(){ // 함수의 이름 임의로 a
            return 10;
        }
    화살표 함수로 바꾸면 : () => ( 10 );



    name.map( () => { } ) 실행할 내용이 여러줄일 때 중괄호로 사용한다

        function a(){
            let tot = 10+20+30+40;
            let result = tot < 50;
            return result;
        }
    화살표 함수로 변경하면 : () => {
            let tot = 10+20+3;
            let result = tot<50 ;
            return result;
        }

*/}