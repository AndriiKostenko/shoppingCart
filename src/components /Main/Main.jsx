import React from 'react'
import Item from '../Item/Item'
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cart'
import { Grid, Container } from '@material-ui/core';



export default function Main() {

    const items = useSelector(store => store.items.items);
    const dispatch = useDispatch();

    const clickBtn = (item) => {
        dispatch(addToCart(item))
    }

    return (
       <Container maxWidth='md'>            
           <Grid 
                container
                direction='column'
                justify='space-around'
                padding='30px 0' 
                
            >
           
            {items && items.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    
                
                />
            ))}
             </Grid>

        </Container>

    )
}
