import React from "react";
import { Link } from 'react-router-dom';

export default function MainMenu (){

    return( // 설명, 실습, 문제 등 여기에 이동 링크 만들어서 사용할겨
        <div className="nav">
            <Link to="/propstate">propstate</Link>
        </div>
    );
}