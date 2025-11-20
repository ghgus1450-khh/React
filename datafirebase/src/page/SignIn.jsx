import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


export default function SignIn(){

    const {signin} = useAuth();
    const nav = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function onSubmit(e) {
        e.preventDefault();
        if( !email || !password){
            alert("이메일과 비밀번호를 입력하세요");
            return;
        }

        setLoading(true);

        try{
            await signin(email, password);
            nav("/")
        }catch(err){
            console.error(err);
            if(err.code === "auth/invalid-email"){
                alert("이메일 형식이 올바르지 않습니다");
            }else if(err.code === "auth/weak-password"){
                alert("비밀번호는 6자 이상이어야 합니다");
            }else{
                alert("로그인 중 오류가 발생했습니다.");
            }
        }finally{
            setLoading(false);
        }

    }

    return(
        <div className="m-20 p-10 text-center">
            <form onSubmit={onSubmit}>
                <div className="text-center mt-2">
                    <label htmlFor="email" >이메일</label>
                    <input type="email" className="border"  onChange={ (e) => setEmail(e.target.value)}/>
                </div>

                <div className="text-center mt-2">
                    <label htmlFor="password">비밀번호</label>
                    <input type="password" className="border" onChange={ (e) => setPassword(e.target.value)} />
                </div>

                <button disabled={loading}>
                    { loading ? "로그인중.." : "로그인" }
                </button>
            </form>
        </div>
    );
}