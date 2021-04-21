import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Main from './components /Main/Main';
import Cart from './components /Cart/Cart';
import Header from './components /Header/Header';





function App() {
  return (
  <BrowserRouter>

      <div className="App">
        <Header />

  
      </div>

       
       </BrowserRouter>


  );
}

export default App;
