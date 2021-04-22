import React from 'react';
import './style.css'

export default function Item({ item, onClickItem }) {


    return (
        <div className='item'>
            <div className='itemImageWrapper'>
                <img className='itemImage' src={item.image} alt={item.name} />
            </div>
            <div className='itemTextWrapper'>
                <div className='itemContentCenter'>
                    <div className='itemName'>
                        <h3>{item.name}</h3>
                    </div>
                    <div className='itemDescription'>
                        <p>{item.description}</p>
                    </div>
                    <div className='itemColor'>
                        <p>Color: {item.color}</p>
                    </div>

                </div>
                <div className='itemContentRight'>
                    <div className='itemPrice'>
                        <p>${item.price}</p>

                    </div>
                    <button
                        className='addToCartBtn'
                        onClick={() => onClickItem(item)}
                    >
                        Add to cart
                    </button>

                </div>
            </div>

        </div>
    )
}
