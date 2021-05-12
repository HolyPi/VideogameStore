export const ADD_TO_LIST = 'ADD_TO_LIST'
export const CLEAR_LIST = 'CLEAR_LIST'
export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST'
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
        type: REMOVE_FROM_LIST,
        payload: { id }
    }
}
// id = 1
export const addToList = (id) => {
    return {
        type: ADD_TO_LIST,
        payload: { id }
    }
}

export const clearList = () => {
    return {
        type: CLEAR_LIST,
    }
}