import React from "react";

export default function ResultInfo(props){
    
    return(
        <>
            <div>
                <p>이름 - {props.userName} </p>
                <p>나이 - {props.userAge} </p>
                <p>이메일 - {props.userEmail} </p>
            </div>
        
        </>
    );
}