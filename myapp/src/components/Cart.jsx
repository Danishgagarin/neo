import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8012/cart/${userId}`)
            .then((res) => {
                setCartItems(res.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the cart items:", error);
            });
    }, [userId]);

    return (
        <div>
            <h1>Your Cart</h1>
            {cartItems.map((item, index) => (
                <div key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                </div>
            ))}

            {cartItems.length > 0 && (
                <a href="http://localhost:5173/payment">
                    <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
                        Proceed to Payment
                    </button>
                </a>
            )}

        </div>
    );  
};

export default Cart;