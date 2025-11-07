import { useState } from "react";

export default function ProductForm({onAdd}){ 
    // {props} -> prope.onAdd 꺼내오는 방식

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0); 

    const submit = (e)=>{
        e.preventDefault(); // 폼의 기본동작, 새로고침 방지
        if( !name.trim() || !price ) return; // 상품명과 가격이 입력되지 않았다면 실행 금지
        onAdd({ name : name.trim(), price : price}); // 인풋 태그에 넣어둔 값을 객체 형태로 변경
        setName("");
        setPrice(0);
    };

    return(
        <>
            <form onSubmit={submit}>
                 {/* form 안에 input 태그 넣는 방식으로 하기
                    form은 데이터 전송 역할 */}
                <input type="text" placeholder="상품명" 
                onChange={(e) => setName(e.target.value)}
                value={name}
                />

                <input type="number" placeholder="상품가격"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                />

                <button>장바구니</button>
            </form>
        </>
    );
}