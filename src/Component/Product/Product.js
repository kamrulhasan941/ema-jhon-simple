import React from 'react';
import './Product.css'
const Product = (props) => {
    const{img,name,seller,price,stock}= props.product
    return (
        <div className='product'>
     
     <div className="">

     <img src={img}></img>
     </div>
     <div >
     <h4 className="product-name">{name}</h4>
     <p className='seller-font'>By <small>{seller}</small></p>
     <h3 className='price-font'>${price}</h3>
     <h5 className="stock-num">Only {stock}  Left Buy Now</h5>
     <button className='btn' onClick={()=> props.handaddProduct(props.product)}>Add To Card</button>
     </div>
        </div>
    );
};

export default Product;