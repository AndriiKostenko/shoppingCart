import React from 'react'
import './style.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Main from '../Main/Main';
import Cart from '../Cart/Cart';


export default function Header() {
    return (
        <Router>
            <div className='header'>
                <div className='headerTop'>
                    <h1>Shop</h1>
                    <Link to="/" className='headerButton' >Home</Link>
                    <Link to="/cart" className='headerButton'>cart</Link>
                </div>
            </div>

            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>

        </Router>
    )
}
