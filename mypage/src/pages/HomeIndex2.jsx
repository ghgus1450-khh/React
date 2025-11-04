import React from "react";
import {Link} from "react-router-dom";
import Homeimg from "./images/big01.jpg";

export default function HomeIndex2(){
    return(
        <div>
            <div className="portBox">
                <Link to={'/Portfolo'} className="Port">Portfolo</Link>
            </div>
            <div>
                <img src={Homeimg} alt="홈 이미지" />
            </div>
        </div>
    );
}