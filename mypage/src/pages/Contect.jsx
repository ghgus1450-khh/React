import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Contect (){
    
    const [name, setName] = useState();

    return(
        <>
            <h3>Contect 창</h3>
            <p>이름 : 강호현 <br /> 예쁜나이 스물다섯살 - 1</p>
            {/* <input type="text" value={} onChange={} /> */}
            <Link to={'/'} className="HomeBtn">홈으로</Link>
        </>
    );
}