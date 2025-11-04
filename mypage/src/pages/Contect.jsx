import React from "react";
import {Link} from "react-router-dom";

export default function Contect (){
    return(
        <>
            <h1>Contect 창</h1>
            <p>이름 : 강호현 <br /> 예쁜나이 스물다섯살 - 1</p>
            <Link to={'/'} className="HomeBtn">홈으로</Link>
        </>
    );
}