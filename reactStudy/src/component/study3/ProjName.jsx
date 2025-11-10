import React from 'react';
import { useState } from 'react';

export default function PorjName(){

    const[name, setName] = useState('');

    return(
        
        <div>
            
            <h3>이름 저장</h3>
        
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <p>이름 : {name}</p>
            <button onClick={() => setName()}>이름 저장</button>
            <p>당신의 이름은 {name} 입니다</p>
            

        </div>
    );
}