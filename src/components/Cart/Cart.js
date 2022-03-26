import { RiDeleteBinLine } from 'react-icons/ri';
import './Cart.css'
const Cart = ({ cap, chooseAgainBtn }) => {
    // console.log(cap)
    let capName;
    let img;
    let price;
    for (const item of cap) {
        capName = item.name;
        img = item.img;
        price = item.price;
    }



    return (
        <div className='cart-container'>
            <h5>Selected Cap:{cap.length}</h5>
            {
                cap.map(item => (
                    <h4 key={item.id}>{item.name}:${item.price}</h4>
                ))
            }
            <div className="cart">
                <img src={img} alt="No item" />
                <p>{capName} Price:${price}</p>
                <RiDeleteBinLine className='icon'></RiDeleteBinLine>

            </div>
            <button className='for-me-btn'>CHOOSE 1 FOR ME</button>
            <br />
            <button onClick={chooseAgainBtn} className='again-btn'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart; 