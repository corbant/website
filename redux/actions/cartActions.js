import { ADD_TO_CART, ADD_QUANTITY, SUB_QUANTITY, REMOVE_FROM_CART } from './action-types/cart-actions'
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id 
    }
}
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}