import { ADD_TO_LIST, CLEAR_LIST, REMOVE_FROM_LIST, ADD_ONE, REMOVE_ONE } from '../actions'

// [] => [0] => [0, 1]
// this gets stored in index.js reducers
const shoppingCartReducer = (state = [], action) => {
  switch(action.type) {
      // sees that it's going to act on the add_to_cart action, examine the type
      //sees whatever we have to do to modify our state
    case ADD_TO_LIST:  
    // Search the array for the id
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.payload.id) {
       
          // if id is found
          // count += 1
          return [ ...state]
        }
      }
    // copies array
      return [...state, { id: action.payload.id}] 

    case CLEAR_LIST:
        return []
    
      
    case REMOVE_FROM_LIST:
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