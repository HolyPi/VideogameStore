import { combineReducers } from 'redux' //redux engine
import shoppingCartReducer from './shoppingListReducer'

//property is where we store the array
export default combineReducers({
  shoppingCart: shoppingCartReducer
})