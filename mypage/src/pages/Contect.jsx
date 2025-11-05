import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Contect (){
    
    // set은 변수를 저장 및 변경하기 위한 함수
    // setName이 호출되면 useState이 작동된다

    const [name, setName] = useState("");

    return(
        <>
            <h3>Contect 창</h3>
        
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <p>이름 : {name}</p>

            <Link to={'/'} className="HomeBtn">홈으로</Link>
        </>
    );
}