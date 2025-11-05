import React, { useState } from "react";

export default function Counter (props){
    
    const [count, setCount] = useState(0);

    return(
        <>
            <h3>카운트 : {count}</h3>
            <button onClick={ () => setCount(count + 1)}> + 증가</button>
            <button onClick={ () => setCount(count - 1)}> - 감소</button>
        </>

    );
}