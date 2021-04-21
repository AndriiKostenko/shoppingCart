import React from 'react'
import Item from '../Item/Item'
import './style.css';
import { useSelector } from 'react-redux';


export default function Main() {
    
    const items = useSelector(store => store.items.items);

    return (
        <div className='mainContainer'>
            <h1>Main</h1>
       
            {items && items.map(item => (
                <Item key={item.id} item={item} />
            ))}           

        </div>
    )
}
