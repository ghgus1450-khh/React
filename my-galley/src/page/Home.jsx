import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/SignInL')}>가입하기</button>
        </div>
    );


}
// 내보낼 function 이 하나일 경우, 함수 앞에 export default 를 넣어줘도 된다 (무조건 나가야 한다는 표시) 