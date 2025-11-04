import React from "react";
import { Link } from "react-router-dom";
import SignIn2 from "./SignIn2";

export default function SignInL (){
    return(
        <div>
            <h1>가입페이지</h1>
            <form>
                <h3>이름 : </h3>
                <input type="text" name="name" id="name"/>
            </form>
            <Link to='../SignIn2'>Next</Link>
            <br></br>
            <Link to='/'>HOME</Link>
        </div>
    );
}


/* Link와 button 을 통해 이동처리 하는거 언제 누구를 ?
리엑트는 SPA (Single Page Application) 구조이기 때문에 새로운 페이지가 열리면 
기존 리엑트로 작성한 코드를 다시 불러오기 때문에 데이터 라든지 태그들 재활용이 안된다
페이지를 리로드 하지 않는 방식이 리액트

리엑트에서 a 태그와 from 태그를 이용하여 전송 및 이동을 할 수 있음
하지만 페이지가 새로고침 되기 때문에 기존의 모든 것을 다시 처음부터 해야함 
a 태그 대신 Link를 사용하고 form 태그를 사용해야 한다면
<form onSubmit={navigate} navigate를 이용한다.

button 주용도 : 이벤트기반 동작(버튼 클릭, form 데이터 제출, 함수실행 등)
       작동방식 : useNavigate로 코드 내에서 이동
       코드 형태 : <button onClick={ ()=> navigate("/write")} 작성 </button>
       접근성(웹표준) : 액션용으로 적합
       js함수적용 : 가능

Link 주용도 : 단순한 페이지 이동
     작동방식 : React Router가 내부적으로 처리
     코드 형태 : <Link to="/save">저장</Link>
     접근성(웹표준) : 경로이동 등
     HTML적 의미 : 다른 페이지로 이동하는 링크

*/