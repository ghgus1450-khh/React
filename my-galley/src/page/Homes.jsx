import React from "react";
import { Link } from "react-router-dom";
import img1 from './img/store01.png';
import img2 from './img/store2.png'; // 리엑트에서 사진을 변수에 담아두고 사용해야한다


export default function Homes() {

    return (
        <div className="BoxWrap">
            <div>
                <nav className="BoxNav">
                    <Link to={'Place'} className="link" >전시장</Link>
                    <Link to={'Dir'} className="link" >작가</Link>
                    <Link to={'Login'} className="link" >로그인</Link>
                </nav>
            </div>
            <div className='imgBox'>
                <img src={img1} alt="이미지1" className='image' />
                <img src={img2} alt="이미지2" className='image' />
            </div>
        </div>
        /*          <Route path='/Place' element={<Place />}/>
          <Route path='/Dir' element={<Dir />}/>
          <Route path='/Login' element={<Login />}/>

          <Route path='/SignIn' element={<SignIn />}/> */
    );
}