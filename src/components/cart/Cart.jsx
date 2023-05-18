import { Button, styled, Typography } from '@mui/material';
import React, { useContext, useEffect, useState, useReducer } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/productcontex';
import './Cart.css';
import EmptyCart from './EmptyCart';

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Cart = () => {
    const GlobalState = useContext(CartContext);
    const state = GlobalState.state;
    const dispatch = GlobalState.dispatch;

    const [countMap, setCountMap] = useState({}); // Track count for each item using a map

    const [totalPrice, setTotalPrice] = useState(0);

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    useEffect(() => {
        let count = 0;
        state.forEach((item) => {
            count += item.price * (countMap[item.id] || 1); // Multiply the price by the count of each item
        });
        setTotalPrice(count);
    }, [state, countMap]);

    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            dispatch({ type: 'SET_CART', payload: JSON.parse(savedCartItems) }); // Load the cart items from local storage
        }
    }, [dispatch]);

    const handleIncrement = (item) => {
        setCountMap((prevCountMap) => ({
            ...prevCountMap,
            [item.id]: (prevCountMap[item.id] || 1) + 1, // Increment the count for the item
        }));
    };

    const handleDecrement = (item) => {
        setCountMap((prevCountMap) => {
            const count = prevCountMap[item.id] || 1;
            if (count > 1) {
                return {
                    ...prevCountMap,
                    [item.id]: count - 1, // Decrement the count for the item
                };
            }
            return prevCountMap;
        });
    };

    return (
        <div className='main'>
            <div className='container'>
                {state.length > 0 ? (
                    state.map((item, index) => (
                        <div className='onecomp' key={index}>
                            <img src={item.image} alt='snapdeal' />
                            <div className='desccomp'>
                                <h4>{item.title}</h4>
                                <SmallText>Seller:RetailNet
                                    <span><img src={fassured} style={{ width: 50, marginLeft: 10 }} /></span>
                                </SmallText>
                                <p>Rating: {item.rating.rate}</p>
                                <h4>${item.price}</h4>
                            </div>
                            <div className='count'>
                                <button onClick={() => handleDecrement(item)}>-</button>
                                <span>{countMap[item.id] || 1}</span>
                                <button onClick={() => handleIncrement(item)}>+</button>
                            </div>
                            <h1 className='dele' onClick={() => dispatch({ type: 'REMOVE', payload: item })}>
                                <Button variant='contained'>Remove</Button>
                            </h1>
                        </div>
                    ))
                ) : (
                    <EmptyCart />
                )}
            </div>
            {state.length > 0 && (
                <div className='pay'>
                    <NavLink to='./Payment'>
                        <StyledButton variant='contained'>Place Order</StyledButton>
                    </NavLink>
                    <h1>Total - ${totalPrice}</h1>
                </div>
            )}
        </div>
    );
};

export default Cart;
