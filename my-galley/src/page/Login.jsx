import React from "react"; // 최상위 폴더를 가져오는 경우 중괄호 사용 안 해도 됨
import { Link } from "react-router-dom";
import './Login.css';

export default function Login() {

    return (
        <div>
            <h1>로그인창</h1>

            <div className="LoginBox">
                <form>
                    <div className="inputBox">
                        <label htmlFor="id">ID :</label>
                        <input type="text" placeholder="아이디를 입력하세요"
                            name="id" className="input" />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="password">비밀번호 :</label>
                        <input type="password" placeholder="비밀번호 8자리를 입력하세요"
                            name="password" className="input" />
                    </div>
                </form>
            
                <Link to={'/'} className="LoginBtn">로그인</Link>
                <Link to={'/SignIn'} className="SignInBtn">회원가입</Link>
            </div>
        </div>
    );

}