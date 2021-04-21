import React from 'react'
import './App.css';
import Header from './components /Header/Header';
import axios from 'axios';
import {setItems} from './redux/actions/items';
import { useDispatch } from 'react-redux';



function App() {

  const dispatch = useDispatch();
    
      React.useEffect(() => {
      axios
      .get('https://607602090baf7c0017fa76d6.mockapi.io/api/products/products')
      .then(response => dispatch( setItems(response.data)))
      .catch(error => console.log(error))
  }, []);


  return (
    <div className = "App" >
      <Header />
   
    </div>
  );
}

export default App;