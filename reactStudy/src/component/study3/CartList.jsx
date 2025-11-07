

export default function CartList({cart}){ //(props)  -> props.cart
    

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
                        <button>삭제</button>
                        </li>
                    ))
                    }

            </ul>
        </>
    );
}