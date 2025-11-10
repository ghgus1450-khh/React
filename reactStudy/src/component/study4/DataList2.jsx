import { Link } from "react-router-dom";
import { useState } from "react";

export default function DataList2(){

    const mamber = [
        {id:56 , userId:"skyblue" , age:45 , tel:"01012123333" },
        {id:1 , userId:"gold119" , age:35 , tel:"01034456789" },
        {id:3 , userId:"kfteam1" , age:23 , tel:"0101222222" },
        {id:4 , userId:"asdfg" , age:38 , tel:"01023948576" },
        {id:54 , userId:"qwer223" , age:15 , tel:"01054679876" },
        {id:7 , userId:"hahaha66" , age:20 , tel:"01012345678" }
    ]

    // 첫페이지에서는 map출력2라고 출력, 주소는 /map2

    // 배열의 조건을 출력하는 방법
    // 1. 변수에 필터를 저장하여 출력(삼항 연산자 혹은 && 단축) 조건 연산자 사용
    // 2. map 안에 if문 입력 (이때, 중괄호를 사용)


    // 이때, 검색 느낌을 주고 싶거나 값을 변하게 변경하고 싶다면 변수를 만들어 State를 해준다

    
    const [age, setAge] = useState(0);
    const [userId, setUserId] = useState("");
    const [keyword, setKeyword] = useState("");

    // const mamber2 = mamber.filter(u => u.age >= age );
    // const mamber2 = mamber.filter(u => u.userId.includes(userId) );
    const mamber2 = mamber.filter
        ( u => [u.userId, u.age, u.tel].join("")
            .includes(keyword) ); // inclydes() : 문자열 포함 여부를 알려준다


    return(
        <>
            <Link to="/" className="home">HOME</Link>
        
             {/* <ul className="border mb-4 p-4">
                <li className="mb-4">전체 출력</li>
                {mamber.map( (m) => (
                    <li key={m.id} className="mb-4 text-left">유저 아이디 : {m.userId} , 전화번호 : {m.tel}</li>
                )
                )}
            </ul> */}

            {/* 아이디 검색 userId, setUserId */}
            {/* 아이디 검색 <input type="text" onChange={(e) => setUserId(e.target.value)} className="mb-2" /> */}
            
            {/* 나이 검색 age, setAge */}
            {/* 나이 검색 <input type="number" onChange={(e) => setAge(e.target.value)} className="mb-2"/> */}

            {/* 통합 검색 */}
            통합 검색 <input type="text" onChange={(e) => setKeyword(e.target.value)} className="mb-2" />

            <ul className="border mb-4 p-4">
                <li className="mb-4">나이가 30살 이상일 경우(필터사용)</li>
                {mamber2.map( (m) => (
                    <li key={m.id} className="mb-4 text-left">유저 아이디 : {m.userId} , 전화번호 : {m.tel}</li>
                )
                )}
            </ul>

            <ul className="border mb-4 p-4">
                <li className="mb-4">나이가 30살 이상일 경우(중괄호 if문 사용)</li>
                {mamber.map( (m) => { // if문을 사용시 중괄호로 변경하여 사용
                    if(m.age>=30)
                    return <li key={m.id} className="mb-4 text-left">유저 아이디 : {m.userId} , 전화번호 : {m.tel}</li>
                }
                )}
            </ul>
        </>
    );
}