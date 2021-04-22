import React from 'react'
import Item from '../Item/Item'
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cart'


export default function Main() {

    const items = useSelector(store => store.items.items);
    const dispatch = useDispatch();

    const clickBtn = (item) => {
        dispatch(addToCart(item))
    }

    return (
        <div className='mainContainer'>
            <h1>Main</h1>

            {items && items.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    onClickItem={clickBtn}
                />
            ))}

        </div>
    )
}
