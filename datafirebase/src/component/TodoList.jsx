// TodoList.jsx
// 파이어베이스에 저장된 데이터 읽기
import { useEffect, useState } from "react";
import { db } from '../firebase/config';
import { collection, onSnapshot, query, orderBy, updateDoc, doc, deleteDoc } from "firebase/firestore";

export default function TodoList() {

    // 파이어베이스 컬렉션에 가지고 온 데이터들 담을 공간 필요
    const [todos, setTodos] = useState([]);

    useEffect(
        () => {
            // 컬렉션에서 가져오기
            const ref = collection(db, "todos");

            // 정렬
            const res = query(ref, orderBy("createAt", "desc")); //orderBy : 자동 새로고침

            const unsub = onSnapshot(res, (snap) => {
                const list = snap.docs.map((d) => (
                    { id: d.id, ...d.data() }
                ));
                setTodos(list);
            });
            return () => unsub(); // 파이어베이스 해제 - 컴포넌트 연결해제시 
        }
        , []);

        // 수정 - 할일 텍스트 클릭하면 done 의 값 true 변경
        async function toggoleDone(td){ // 누구를 변경 할 것인가 - 매개변수를 통해 받기
            const ref = doc(db, "todos", td.id);
            await updateDoc(ref, {done: !td.done});
        }

        // 삭제
        async function romoveTodo(id){ // 누구를 삭제 할 것인가 - 매개변수를 통해 받기
            if(!window.confirm("삭제할까요")) return; // 정말 삭제할 것인지 한번 더 확인하는 팝업창
            const ref = doc(db, "todos", id); // todos 컬렉션에서 id값 같은거 조회
            await deleteDoc(ref);
        } 

    return (
        <ul className="my-3">
            {
                todos.map((t) => (
                    <li key={t.id} className="flex items-center justify-between">
                        <button onClick={() => toggoleDone(t) } className="cursor-pointer">
                            <span className={t.done ? "line-through" : ""}> 
                                {t.text}
                            </span>
                        </button>
                        <button onClick={() => romoveTodo(t.id) } className="cursor-pointer">삭제</button>
                    </li>
                ))
            }
        </ul>
    );
}