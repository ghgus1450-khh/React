import React from "react";


function SignIn2() {


    return (
        <div>
            <div className="inputBox">
                <form>
                    <div className="inputContent">
                        <label htmlFor="eamil">이메일 : </label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="inputContent">
                        <label htmlFor="password">암호 : </label>
                        <input type="password" placeholder="숫자로 입력해주세요 "
                            name="password" id="password" />
                    </div>

                    <div className="inputContent">
                        <label htmlFor="name">이름 : </label>
                        <input type="text" name="name" id="name" />
                    </div>

                    <div className="inputContent">
                        <label htmlFor="bir">생년월일 : </label>
                        <input type="text" placeholder="생년월일(8자) 입력해주세요" name="bir" id="bir" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn2;