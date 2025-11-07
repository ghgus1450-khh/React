import { Link } from "react-router-dom";
import { useState, useEffect } from "react";



function TestEffect() {

    const [count, setCount] = useState(0);

    // useEffect(
    //     () => {
    //         // document.title=`카운트:${count}`;
    //         // console.log(`카운트 : ${count}`);

    //         // return() => {
    //         //     document.body.style.backgroundColor="white";
    //         // }


    //         if( count >= 5 ){
    //             document.body.style.background="violet";
    //         }else{
    //             document.body.style.background="gray";
    //         }

    //         return() => {
    //             document.body.style.backgroundColor="white";
    //         }
    //     } , [count]
    // );

    const [showModal, setShowModal] = useState(false);

    useEffect( // 컴포넌트 렌더링 될 때 모달창 띄우기
        () => {
            setShowModal(true);
        },[]
    );

    return (
        <>
            <Link to="/" className="home">HOME</Link>
            {/* <input type="text"/>

            <h2>카운트 : {count} </h2>
            <button onClick={() => setCount(count + 1)}>count 증가</button> */}
            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)} />
                )
            }
        </>
    );
}

function Modal({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white px-10 py-5 rounded-lg shadow-lg text-center">
                <h2 className="text-xl mb-4">모달창이지</h2>
                <p className="text-gray-500 mb-4">
                    모달창은 컴포넌트가 처음 연결될 때 나옵니다.
                    모달창 만들면 유용한 점도 있으니 참고하세요.
                    알았죠? 알았으면 대답 plz...
                </p>
                <button className="bg-sky-700 hover:bg-sky-200 text-white px-4 py-2 rounded-b-md" onClick={onClose}>
                    닫기
                </button>
            </div>
        </div>
    );
}


export default TestEffect;