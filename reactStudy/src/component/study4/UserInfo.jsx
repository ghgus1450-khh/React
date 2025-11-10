import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserInfo() {

    const [users, setUsers] = useState([]);
    const [keyword, setKeyword] = useState("");



    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json()) // json 으로 변환
                .then((data) => setUsers(data)); // json의 내용을 data에 담고 , 그 data를 setUsers 에 담겠다

        }, []
    );

    //name, email, phone, company name

    const users2 = users.filter((u) => [u.name, u.email, u.phone, u.company.name].join("").includes(keyword));



    return (
        <>
            <Link to="/" className="home" >HOME</Link>
            <h2 className="mb-6 font-bold">company list</h2>
            통합검색 : <input type="text" onChange={(e) => setKeyword(e.target.value)} className="mb-6 border" />

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