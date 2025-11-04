import React from "react";
import {Link} from "react-router-dom";

export default function About (){
    return(
        <div>
            <h1>About 창</h1>
            <p>나는 강호현 입니다</p>
            <Link to={'/'}>홈으로</Link>
        </div>
    );
}