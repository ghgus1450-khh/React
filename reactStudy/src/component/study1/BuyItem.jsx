export default function BuyItem( { item, setItem }){
    const onChange = (e) =>{ // input 태그의 onChange 이벤트 발생시 실행할 함수 
        const { name, value } = e.target;
        setItem( p => ({ ...p, [name]:value}));
    }

    return(
        <>
            <h3>구매 상품 입력</h3>
            <input name="name" value={item.name} onChange={ onChange }  placeholder="상품명 입력"/> <br/>
            <input name="price" value={item.price} onChange={ onChange } placeholder="상품 금액 입력"/> <br/>
            <input name="brand" value={item.brand} onChange={ onChange } placeholder="브랜드명 입력"/>  
        </>
    );
}