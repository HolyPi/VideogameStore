import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, ADD_ONE, REMOVE_ONE } from '../actions'

// [] => [0] => [0, 1]
// this gets stored in index.js reducers
const shoppingCartReducer = (state = [], action) => {
  switch(action.type) {
      // sees that it's going to act on the add_to_cart action, examine the type
      //sees whatever we have to do to modify our state
    case ADD_TO_CART:  
    // Search the array for the id
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.payload.id) {
          // if id is found
          // count += 1
          state[i].count += 1
          return [ ...state]
        }
      }
    // copies array
      return [...state, { id: action.payload.id, count: 1}] 

    case CLEAR_CART:
        return []
    
      
    case REMOVE_FROM_CART:
      return state.filter((item, i) => i !== action.payload.id)

    case ADD_ONE:
      return state.map((item, i) => {
        if (action.payload.id === i) {
          item.count += 1
        }
        return item 
      })

    case REMOVE_ONE:
      return state.map((item, i) => {
        if (action.payload.id === i) {
          item.count -= 1
        }
        return item
      }).filter(item => item.count > 0)

    default: 
      return state
  }
}

export default shoppingCartReducer