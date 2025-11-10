import React from "react";
import { Link } from 'react-router-dom';

export default function MainMenu (){

    return( // 설명, 실습, 문제 등 여기에 이동 링크 만들어서 사용할겨
        <div className="nav border rounded-3xl p-12">
            <Link to="/propstate" className="menu">props + state</Link>
            <Link to="/boardMake" className="menu">게시판 작성문제</Link>
            <Link to="/member" className="menu border-3 rounded">멤버</Link>
            <Link to="/store" className="menu">상점구매</Link>
            <Link to="/schedule" className="menu">시간표</Link>
            <Link to="/studentname" className='menu'>학생명단</Link>
            <Link to="/simplememo" className='menu'>간단메모</Link>
            <Link to="/productBuy" className="menu">장바구니</Link>
            <Link to="/effect1" className="menu">Effect 살펴보기</Link>
            <Link to="/TestFetch" className="menu">fetch</Link>
            <Link to="/PorjName" className="menu">숙제</Link>
            <Link to="/PorjHeart" className="menu">좋아요</Link>
            <Link to="/map1" className="menu">map출력</Link>
            <Link to="/map2" className="menu">map출력2</Link>
            <Link to="/users" className="manu">유저들</Link>
        </div>
    );
}