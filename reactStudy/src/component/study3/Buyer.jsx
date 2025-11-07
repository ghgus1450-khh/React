import {Link, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import ProductForm from './ProductForm';
import CartList from './CartList';


export default function Buyer(){

    const [cart, setCart] = useState([]);
    const addCart = (item) => {
        setCart((p) => [...p, {id:Date.now(), ...item }] );
    };
    const removeCart = (id) => {
        setCart();
    };

    return (
        <>
            <Link to="/" className='home'>HOME</Link>

            <h2>현2</h2>
            <Link to="/productbuy/add">입력</Link>
            {/* 강제적으로 링크 연결하는 방법
                 메인 주소/서브 주소 */}
            <Link to="/productbuy/cart">목록</Link>


            <Routes>
                <Route path='add' 
                element={
                    <ProductForm onAdd={addCart} />}
                // 부모가 가지고 있어야 하는건 결국 최종적인 것
                />
        
                
                <Route path='cart' 
                element={
                    <CartList cart={cart} />}
                 />
            </Routes>
          
        
        </>
    );
}