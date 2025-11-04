import React from "react";
import {Link} from "react-router-dom";

import img1 from "./images/big01.jpg";
import img2 from "./images/big02.jpg";
import img3 from "./images/big03.jpg";
import img4 from "./images/big04.jpg";
import img5 from "./images/big05.jpg";
import img6 from "./images/big06.jpg";

export default function Portfolo (){
    return(
        <div className="container">
        
            <Link to={'/'} className="HomeBtn">HOME</Link>
      
            <h3>포트폴리오 : (나의 작품)</h3>

            <div className="imgFlex">
                <img src={img1} alt="포폴이미지1"/>
                <img src={img2} alt="포폴이미지2"/>
                <img src={img3} alt="포폴이미지3"/>
            </div>

            <div className="imgFlex">
                <img src={img4} alt="포폴이미지4"/>
                <img src={img5} alt="포폴이미지5"/>
                <img src={img6} alt="포폴이미지6"/>
            </div>
            
        </div>
    );
}