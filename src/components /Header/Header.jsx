import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Header() {

    const { totalPrice, totalCount } = useSelector(({ cart }) => ({
        totalPrice: cart.totalPrice,
        totalCount: cart.totalCount,
    }))

    return (

        <div className='header'>
            <div className='headerTop'>
                <h1>Shop</h1>
                <Link to="/" className='headerButton' >Home</Link>
                <Link to="/cart" className='headerButton'>cart</Link>
            </div>
            <div className='headerButton'>
                <div className='cartTotalCount'>
                    {totalCount}
                </div>
                <Link to="/cart" >My Cart</Link>
            </div>
        </div>
    )
}
