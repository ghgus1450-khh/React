import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function AuthStatus(){
    const {user, signout} = useAuth();

    async function logout(){
        // 로그아웃 하겟냐 물어볼꺼면
        // if ( !window.confirm("로그아웃 하시겠습니까???")) return;
        await signout();
    }

    return(
        <header className="m-20 p-10 text-center">
           
            {
                user ? (  // 로그인 성공시 보여줄 내용
                    <div>
                        <span>{user.email}님</span>
                        <button onClick={logout} className="cursor-pointer">로그아웃</button>
                    </div>
                ) : (  // 로그인 안했을때 보여줄 내용
                    <div>
                        <Link to="/signIn">로그인</Link>
                        <Link to="/signUp">회원가입</Link>
                    </div>
                )
            }
        </header>
    );
}