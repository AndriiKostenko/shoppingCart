import React , {useState, useEffect} from 'react'
import axios from 'axios';
import Item from '../Item/Item'
import './style.css';

export default function Main() {

    const [items, setItems] = useState();

    useEffect(() => {
        axios
        .get('https://607602090baf7c0017fa76d6.mockapi.io/api/products/products')
        .then(response => setItems(response.data))
        .catch(error => console.log(error))
    }, []);

    


    return (
        <div className='mainContainer'>
            <h1>Main</h1>
       
            {items && items.map(item => (
                <Item key={item.id} item={item} />
            ))}           


        </div>
    )
}
