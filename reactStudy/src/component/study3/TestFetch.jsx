import { useState, useEffect } from 'react'; 

export default function TestFetch(){
    const [users, setUsers ] = useState([]);

    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then( (response) => response.json() ) // json 으로 변환
            .then( (data) => setUsers(data) ); // json의 내용을 data에 담고 , 그 data를 setUsers 에 담겠다

        }, []
    )

    return(
        <>
            <h2>데이터 출력</h2>
            <ul>
                {
                    users.map( (u) => (
                        <li>{u.name} : {u.email}</li>

                    )
                    )
                }
            </ul>
        </>
    );
}