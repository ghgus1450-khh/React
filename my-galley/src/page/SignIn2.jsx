import React from "react";
import { Link } from "react-router-dom";

function SignIn2() {


    return (
        <div>
            <div>
                <h1>회원가입</h1>
                <form>
                    <div className="inputBox">
                        <label htmlFor="eamil">이메일 : </label>
                        <input type="text" name="email" id="email"
                            className="inputS" />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="password">암호 : </label>
                        <input type="password" placeholder="숫자로 입력해주세요 "
                            name="password" id="password"
                             className="inputS" />
                    </div>

                    <div className="inputBox">
                        <label htmlFor="name">이름 : </label>
                        <input type="text" name="name" id="name"
                         className="inputS" />
                    </div>

                    <div className="inputBox">
                        <label htmlFor="bir">생년월일 : </label>
                        <input type="text" placeholder="생년월일(8자) 입력해주세요" 
                        name="bir" id="bir"  className="inputS" />
                    </div>
                </form>
            </div>
            <Link to={'/'} className="SignInBtn">가입하기</Link>
        </div>
    );
}

export default SignIn2;