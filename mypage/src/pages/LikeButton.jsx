import React, { useState } from "react";

export default function LikeButton (){

    const [like, setLike] = useState(0);

    return(
        <>
            <h4>좋아요 ♥ {like}</h4>
            <button onClick={ () => setLike(like + 1)}> Like! </button>
            <button onClick={ () => setLike(like - 1)}> Bad.. </button>
        </>
    );
}