import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate }
    from 'react-router-dom';
import './SignIn.css';
import SignIn2 from "./page/SignIn2";

function Home() {

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/SignIn2')}>가입하기</button>
        </div>
    );


}

function SignIn() {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="SignIn2" element={<SignIn2 />} />
            </Routes>
        </Router>


    );
}

export default SignIn;