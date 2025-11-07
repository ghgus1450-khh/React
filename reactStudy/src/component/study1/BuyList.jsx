



export default function BuyList( {item} ){
    return(
        <>
            <h2>구매 내역 페이지</h2>
            <p>상품명 : {item.name}</p>
            <p>구매가격 : {item.price}</p>
            <p>브랜드 : {item.brand}</p>
        </>
    );
}