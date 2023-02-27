import { Button } from '@mui/material';
import React, { useContext, useEffect, useState, useReducer } from 'react'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/productcontex';
import './Cart.css'


const Cart = () => {

    const GlobalState = useContext(CartContext);
    const state = GlobalState.state;
    const dispatch = GlobalState.dispatch;

    // const [state1, dispatch1] = useReducer(reducer, { count: 1 });
    const [totalPrice, setTotalPrice] = useState(0);

    function reducer(state, action) {
        switch (action.type) {
            case 'INCREMENT':
                return { count: state.count + 1 };
            case 'DECREMENT':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    }

    useEffect(() => {
        let count = 0;
        state.map((i) => {
            count += i.price;
        })
        setTotalPrice(count);
    }, [state])


    return (
        <div className='main'>
            <div className='container'>
                {
                    state.map((item, index) => {
                        return (
                            <div className="onecomp">
                                <img src={item.image} alt="snapdeal" />
                                <div className="desccomp">
                                    <h4>{item.title}</h4>
                                    <p>Rating : {item.rating.rate}</p>
                                    <h4>${item.price}</h4>
                                </div>
                                {/* <div className="count">
                                    <button onClick={() => dispatch1({ type: 'DECREMENT', payload: item })}>-</button>
                                    <span>{state1.count}</span>
                                    <button onClick={() => dispatch1({ type: 'INCREMENT', payload: item })}>+</button>
                                </div> */}
                                <h1 className='dele' onClick={() => dispatch({ type: 'REMOVE', payload: item })}>
                                    <Button variant="contained">Delete</Button>
                                </h1>
                            </div>
                        )
                    })
                }
            </div>
            <div className='pay'>
                <NavLink to='./Payment' >
                    <Button variant="contained">Buy Now</Button>
                </NavLink>
                <h1>Total -${totalPrice}</h1>
            </div>
        </div>
    )
}

export default Cart