import { Link } from "react-router-dom";
import { useState } from "react";
import MemberInfo from "./MemberInfo";

export default function Member(){  // 주소 : /member
    const [userId, setUserId] = useState("");
    const [age , setAge] = useState(1);

    return(
        <>
            <Link to="/" className="home">HOME</Link>

            아이디 <input type="text" onChange={(e) => setUserId(e.target.value)} />
            나이 <input type="number" onChange={ (e) => setAge(e.target.value)} />
            <div style={ { width:"100px" } }></div>
            <MemberInfo user={ { userId, age } }/>
        </>

    );
}