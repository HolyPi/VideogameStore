export const ADD_TO_CART = 'ADD_TO_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const ADD_ONE = 'ADD_ONE'
export const REMOVE_ONE = 'REMOVE_ONE'

export const addOne = (id) => {
    return {
        type: ADD_ONE,
        payload: { id }
    }
}

export const removeOne = (id) => {
    return {
        type: REMOVE_ONE,
        payload: { id }
    }
}

export const removeFromList = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {id}
    }
}
// id = 1
export const addToList = (id) => {
    return {
        type: ADD_TO_CART,
        payload: { id }
    }
}

export const clearList = () => {
    return {
        type: CLEAR_CART,
    }
}