import React from "react";
import { Link } from 'react-router-dom'
import { useState } from "react";
import ResultInfo from "./ResultInfo";

export default function Info(){

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");

    return(
      
        <>
            <Link to="/" className="home">HOME</Link>

            <div>
                이름 : <input type="text" onChange={(e) => setName(e.target.value)}/> <br/>
                나이 : <input type="number" onChange={(e) => setAge(e.target.value)} /> <br/>
                이메일 : <input type="email" onChange={(e) => setEmail(e.target.value)} /> <br/>
            </div>

            <ResultInfo userName={name} userAge={age} userEmail={email} />
        </>
    );
}