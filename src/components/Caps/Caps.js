import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Caps.css'
const Caps = ({ cap }) => {
    // console.log(cap);
    const { name, id, price, img } = cap;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <div className="cap-info">
                <h5>{name}</h5>
                <p>#{id}</p>
                <p>Price:${price}</p>
            </div>
            <button className='cart-btn'>
                <p>Add To Cart </p><FaShoppingCart className='cart-btn-icon'></FaShoppingCart>
            </button>
        </div>
    );
};

export default Caps;