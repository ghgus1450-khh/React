import React from "react";
import { Link,Routes,Route } from "react-router-dom";
import HomeIndex from "./HomeIndex";
import Login from "./Login";
import SignIn from "./SignIn2";
import Place from "./Place";
import Dir from "./Dir";



export default function Homes() {

    return (
        <div className="BoxWrap">
            <div className="Box">
                <nav className="BoxNav">
                    <Link to={'Place'} className="link" >전시장</Link>
                    <Link to={'Dir'} className="link" >작가</Link>
                    <Link to={'Login'} className="link" >로그인</Link>
                </nav>
            </div>

           <Routes>
                <Route path="/" element={<HomeIndex />} />
                <Route path='/Place' element={<Place />}/>
                <Route path='/Dir' element={<Dir />}/>
                <Route path='/Login' element={<Login />}/>
                <Route path='/SignIn' element={<SignIn />}/>
           </Routes>
        
        </div>
        
    );
}