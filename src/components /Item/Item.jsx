import React from 'react';
import './style.css'

export default function Item(props) {
 
    return (
        <div className='item'>
            <div className='itemImageWrapper'>
                <img className='itemImage' src={props.item.image} alt={props.item.name} />
            </div>
            <div className='itemTextWrapper'>
                <div className='itemContentCenter'>
                    <div className='itemName'>
                        <h3>{props.item.name}</h3>
                    </div>
                    <div className='itemDescription'>
                        <p>{props.item.description}</p>
                    </div>
                    <div className='itemColor'>
                        <p>Color: {props.item.color}</p>
                    </div>


                </div>
                <div className='itemContentRight'>
                    <div className='itemPrice'>
                        <p>${props.item.price}</p>

                    </div>
                    <button className='addToCartBtn'>Add to cart</button>

                </div>
            </div>

        </div>
    )
}
