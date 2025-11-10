import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserInfo() {

    const [users, setUsers] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [ad, setAd] = useState(1); // 정렬 변경


    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json()) // json 으로 변환
                .then((data) => setUsers(data)); // json의 내용을 data에 담고 , 그 data를 setUsers 에 담겠다

        }, []
    );

    //name, email, phone, company name


    const users2 = users.filter((u) => [u.name, u.email, u.phone, u.company.name].join("").includes(keyword))
    .sort( (a,b) => a.name.localeCompare(b.name)*ad); // 필터로 정리한 상태에서 sort() 정렬해준다 // localeCompare : 문자열끼리 비교해서 순서를 알려주는 메서드 함수

    // a.name.localeCompare(b.name) !== 0 ? name의 값이 0이라면?
    // a.name.localeCompare(b.name) : a.email.localeCompare(b.email) email로 비교해라 
    

    return (
        <>
            <Link to="/" className="home" >HOME</Link>
            <h2 className="mb-6 font-bold">company list</h2>
            통합검색 : <input type="text" onChange={(e) => setKeyword(e.target.value)} className="mb-6 border" />

                                                                                                                
            {/* 1. 초기값 1로 설정한 변수를 저장하고 : const [ad, setAd] = useState(1);
                2. sort 뒤에 변수를 곱해준 후 : .sort((a,b) => a.name.localeCompare(b.name)*ad);
                3. 오름차순에는 1를 곱해주고 내림차순에는 -1를 곱해준다 : setAd(1) 오름차순 , setAd(-1) 내림차순 */}
            <button onClick={() => setAd(1)}>오름차순</button> 
            <button onClick={() => setAd(-1)}>내림차순</button>

            {/* 버튼 하나 가지고 오름/내림차순 버튼 나타내는 방식
                삼항연산자를 사용해준다  */}
            <button onClick={() => setAd(ad * -1)}>
                {ad ==1 ? "오름차순" : "내림차순"}
            </button>
            


            {/* 삼항 연산자 사용 */}
            <ul className="border rounded-3xl m-4 pb-4">
                {users2.length === 0 ? ( 
                    <p className="m-4 p-4">검색결과가 없습니다 </p>
                ) : (
                    users2.map((u) => (
                        <li key={u.id} className="text-left mb-3 p-4"> <strong>{u.name}</strong> 
                            <br></br> 
                            email : {u.email} | phone : {u.phone} | company name : {u.company.name}
                        </li>
                    ))
                )}
            </ul>

        </>
    );
}