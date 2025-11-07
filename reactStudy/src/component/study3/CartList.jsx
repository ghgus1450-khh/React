

export default function CartList({cart, onRemove}){ //(props)  -> props.cart
    

    return(
        <>
            <h2>장바구니</h2>
            <ul style={{padding:0}}>
                {
                    cart.map((item) => (
                        <li key={item.id}>
                        <strong>
                            {item.name} - ({Number(item.price).toLocaleString()}원)
                        </strong>
                        <button onClick={ () => onRemove(item.id)}>삭제</button>
                        </li>
                    ))
                    }

            </ul>
             <p>총 갯수 : {cart.length}</p>
            <p>총 금액 : {(cart.reduce( (sum, i) => sum+i.price,0)).toLocaleString()}원</p>
        
        
        {/* reduce는 배열의 모든 요소를 하나로 축약하는 함수
            총합을 구할 때 많이 사용한다 */}
        
        </>
    );
}