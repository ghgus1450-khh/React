import React from "react";
import { Link, Outlet , Routes, Route } from 'react-router-dom';
import HomeIndex from "./HomeIndex2";
import About from "./About";
import Contect from "./Contect";
import Portfolo from "./Portfolo";



export default function Home() {
    return (
        <div className="container">
            <div className="navs">
                <nav>
                    <Link to={'/'} className="navLink">HOME</Link>
                    <Link to={'/About'}  className="navLink">About</Link>
                    <Link to={'/Contect'}  className="navLink">Contect</Link>
                </nav>
            </div>

        <Outlet/>


{/* 
            <Routes>
                <Route path="/" element={<HomeIndex />} />
                <Route path="/About" element={<About />}/>
                <Route path="/Contect" element={<Contect />}/>
                <Route path="/Portfolo" element={<Portfolo />}/>
            </Routes> */}
        </div>
    );
}