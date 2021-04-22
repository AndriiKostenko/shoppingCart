import React from 'react'
import { useSelector } from 'react-redux';
import Item from '../Item/Item'

export default function Cart() {

    const { totalPrice, items } = useSelector(({ cart }) => cart);

    const addedItems = Object.keys(items).map((key) => {
      return items[key].items[0];
    });

    return (
        <div className='mainContainer'>
            <h1>Cart</h1>
            {
                addedItems && addedItems.map(item => (
                    <Item 
                        key={item.id} 
                        item={item} 
                    />
                ))
            }

            <div>
                <h4>Total Price: {totalPrice}</h4>
            </div>
        </div>
    )
}
