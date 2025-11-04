import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import './SignIn.css';
import SignInL from './SignInL';
import ImgBox from "./Homes";
// import SignIn2 from "./page/SignIn2";
// import Home from "./Home";


function SignIn() {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<ImgBox />} />
                <Route path="/SignInL" element={<SignInL />} />
            </Routes>
        </Router>


    );
}

export default SignIn;