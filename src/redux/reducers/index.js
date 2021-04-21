import { combineReducers } from 'redux';
import itemsReducer from './items'
import cartReducer from './cart'


const rootReducer = combineReducers({
  items: itemsReducer, 
  cart: cartReducer
}); 

export default rootReducer;