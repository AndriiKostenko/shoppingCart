import React , {useState, useEffect} from 'react'
import axios from 'axios';

export default function Main() {

    const [items, setItems] = useState();

    useEffect(() => {
        axios
        .get('https://607602090baf7c0017fa76d6.mockapi.io/api/products/products')
        .then(response => setItems(response.data)) 
    }, []);

    


    return (
        <div>
            <h1>Main</h1>
            
        </div>
    )
}
