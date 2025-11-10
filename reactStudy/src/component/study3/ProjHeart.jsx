import React, { useState } from "react";

export default function LikeButton() {

    const [like, setLike] = useState(0);
    let result = document.querySelector(".result");

    if( like >= 10 ){
            result.innerHTML = "좋아요 10개가 넘었어요!";
    }

    return (
        <>
            <h4>좋아요 수 ♥ {like}</h4>
            <button onClick={() => setLike(like + 1)}> Like! </button>
            <p className="result"></p>

        </>
    );
}