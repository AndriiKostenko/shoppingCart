import React from 'react'
import Container from '@material-ui/core/Container';


import './App.css';
import Header from './components /Header/Header';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Main from './components /Main/Main';
import Cart from './components /Cart/Cart';
import {setItems} from './redux/actions/items';
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch();
    
      React.useEffect(() => {
      axios
      .get('https://607602090baf7c0017fa76d6.mockapi.io/api/products/products')
      .then(response => dispatch( setItems(response.data)))
      .catch(error => console.log(error))
  }, []);

  return (
   <div>

     <Container fixed maxWidth='lg'>

      <Header />
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>  

     </Container>

    </div>


  );
}

export default App;