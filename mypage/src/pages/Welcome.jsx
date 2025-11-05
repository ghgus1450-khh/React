import React from "react";

export default function Welcome(props){
    // return <h2>안녕하세요</h2>; return 안에 태그 하나일 경우 이런식으로 가능
    // props.name 은 객체 형태이다 즉, 키 이름을 미리 정해놔야한다 
    return(
        <>
            <h1>props 테스트</h1>
            <div>props 값 : {props.name}</div>
            <div>나이 값 : {props.age}</div>
        </>
    )
    
}