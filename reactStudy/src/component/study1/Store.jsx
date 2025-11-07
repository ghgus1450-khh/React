
// Store.jsx

import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import BuyItem from './BuyItem';
import BuyList from './BuyList';

export default function Store(){
    const [item , setItem] = useState({
        name : "" , 
        price : 0, 
        brand :"",
    });


    return (
        <>
            <Link to="/" className="home">HOME</Link>

            <h1>다있소 상점</h1>
            <Link to="/store/buy" style={{marginRight:50}}>구매</Link>
            <Link to="/store/list">내역</Link>

            {/* 구매, 내역 주소 라우팅 */}
            <Routes>
                <Route path="buy" element={ <BuyItem item={item} setItem={setItem} />} />
                <Route path="list" element={ <BuyList item={item}/> }/>
            </Routes>
        </>
    );
}

//  구매 클릭시  ->  /store/buy
//  내역 클릭시  ->  /store/list
