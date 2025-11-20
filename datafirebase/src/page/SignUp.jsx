import {useState} from 'react'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function SignUp(){
    const { signup } = useAuth();
    const nav = useNavigate();

    const [email ,setEmail ] =useState("");
    const [ pw , setPw ] = useState("");
    const [loading, setLoading] = useState(false);

    async function onSubmit(e){
        e.preventDefault();
        if( !email || !pw ){
            alert("이메일과 비밀번호를 입력하세요");
            return;
        }

        setLoading(true);

        try{
            await signup(email, pw);  
            //AuthProvider 컴포넌트의 function signup(email, password) 실행
            nav("/")
        }catch(err){
            console.error(err);
            if(err.code === "auth/email-already-in-use"){
                alert("이미 사용중인 이메일 입니다.");
            }else if(err.code === "auth/invalid-email"){
                alert("이메일 형식이 올바르지 않습니다.");
            }else if(err.code ==="auth/weak-password"){
                alert("비밀번호는 6자 이상이어야 합니다.")
            }else{
                alert("회원가입 중 오류가 발생했습니다.");
            }
        }finally{ //  try 내부에서 오류가 발생해도 발생하지않아도  무조건 실행
            setLoading(false);
        }

    }

    return(
        <div>
            <h1 className='mb-4'>회원가입</h1>
            <form onSubmit={ onSubmit }>
                <div>
                    <label>이메일</label>
                    <input type="email" onChange={ (e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="password" onChange={ (e) => setPw(e.target.value)}/>
                </div>
                <button disabled={loading}>
                    {loading ? "가입중..." : "회원가입"}
                </button>
            </form>
        </div>
    );
}