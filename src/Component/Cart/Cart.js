import React from 'react';
import './Cart.css'
const Cart = (props) => {

        const cart= props.cart
let total=0;
 for(let i= 0;i<cart.length; i++){
     const element= cart[i];
     total = total + element.price
 }
 let Shipping= 0 ;
 if (total> 35){
     Shipping =0
 }
 else if (total>15)
 {
     Shipping= 4.9
 }
 else if (total > 0){
     Shipping=12.99
 }
 const formatNumber= num =>{
     const convertnum = num.toFixed(2)
     return Number(convertnum)
 }
 const tax = total/10
 const grandprice= (total+Shipping+tax)

    return (
        <div className='cart'>
            <h4 className='cart-header'>Order Summary</h4>
            <h4 className='order-item'>Item Ordered: {cart.length}</h4>
            <h6 className='price-part'> Product Price : ${formatNumber (total)}</h6>
            <h6 className='price-part'> Shipping Cost :${Shipping} </h6>
            <h6 className='price-part'> TAX & BAT :${formatNumber(tax)} </h6>

            <h1>Total Price :${formatNumber(grandprice)}</h1>
        </div>
    );
};

export default Cart;