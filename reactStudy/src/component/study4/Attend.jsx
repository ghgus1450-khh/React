import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Attend() {

    const [stu, setStu] = useState(
        [
            { id: 22, name: "채은성",NickName: "채버지",className: "고참반"},
            { id: 8, name: "노시환",NickName: "노시시",className: "중참반" },
            { id: 51, name: "문현빈",NickName: "문돌맹",className: "저참반" },
            { id: 13, name: "최재훈",NickName: "최거북",className: "고참반" },
            { id: 1, name: "문동주",NickName: "대전왕자",className: "저참반" },
            { id: 2, name: "심우준",NickName: "치타심",className: "고참반" },
            { id: 58, name: "박상원",NickName: "독도킥",className: "고참반" },
            { id: 20, name: "이재원",NickName: "수달아재",className: "고참반" },
            { id: 59, name: "허인서",NickName: "서산깡패",className: "저참반" },
            { id: 41, name: "정우주",NickName: "유니버스",className: "저참반" },
            { id: 29, name: "황준서",NickName: "코큰견",className: "저참반" },
            { id: 68, name: "조동욱",NickName: "마라탕",className: "저참반" },
            { id: 30, name: "코디 폰세",NickName: "스타워즈",className: "중참반" },
            { id: 55, name: "라이언 와이스",NickName: "대전예수",className: "중참반" },
            { id: 99, name: "류현진",NickName: "코리안 몬스터",className: "고참반" },
        ]
    );

    // 키워드 변수
    const [keyword, setKeyword] = useState(""); // 검색은 문자열일테니 반문자열초기화

    //정렬 변경
    const [asc, setAsc] = useState(true);

    //필터설정
    // const stu2 = stu.filter((u) => u.name.includes(keyword))
    //     .sort((a,b) => a.name.localeCompare(b.name) * asc);

    // 컴퓨터가 작동하는데 적합한 방법
    const stu2 = stu.filter((u) => u.name.includes(keyword))
        .sort((a,b) => 
            asc ? a.name.localeCompare(b.name) :
                  b.name.localeCompare(a.name)
        );


    return (
        <>
            <Link to="/" className="home">HOME</Link>

            <h2 className="mb-6 font-bold f">출석부</h2>
            통합검색 : <input type="text" onChange={(e) => setKeyword(e.target.value)} className="mb-6 border" />

            <div className="flex gap-1 items-center">
                <p>이름정렬</p>
                {/* 1. 정렬 변수를 만들고 useState에다가 true를 정해준다 
                
                */}
                <button onClick={() => setAsc(true)}>오름차순</button>
                <button onClick={() => setAsc(false)}>내림차순</button>
                <button onClick={() => setAsc(!asc)}> 
                    {asc == true ? "오름차순" : "내림차순" }
                    {/* !asc 로 토글 작업 내주기 */}
                </button>
            </div>

            <ul>
                {stu2.length === 0 ? (
                    <p className="m-4 p-4">검색결과가 없습니다 </p>
                ) : (
                    stu2.map((u) => (
                        <li key={u.id} className="m-4"> {u.name} | {u.NickName}  | {u.className}</li>
                    ))
                )}
            </ul>
        </>
    );
}