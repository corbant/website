import { ADD_QUANTITY, ADD_TO_CART, SUB_QUANTITY, REMOVE_FROM_CART } from '../actions/action-types/cart-actions'

const initState = {
    
    products: [
        {id:1, img:'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png', name:'Apple', desc:'A very nice apple', price:1.58, rating:'4'},
        {id:2, img:'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg', name:'Bananas', desc:'Some very nice bananas', price:2.99, rating:'5'}
    ],
    shoppingCart: [],
    totalPrice: 0

}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let addedProduct = state.products.find(product => product.id === action.id);
            let existed_product = state.shoppingCart.find(product => action.id === product.id);
            if(existed_product) {
                addedProduct.quantity += 1;
                return {
                    ...state,
                    totalPrice: state.totalPrice + addedProduct.price
                }

            }
            else {
                addedProduct.quantity = 1;
                let newTotal = state.totalPrice + addedProduct.price;

                return {
                    ...state,
                    shoppingCart: [...state.shoppingCart, addedProduct],
                    totalPrice: newTotal
                }

            }
    
        case REMOVE_FROM_CART:
            let productToRemove = state.shoppingCart.find(product => action.id === product.id);
            let new_products = state.shoppingCart.filter(product => action.id !== product.id);
            let newTotal = state.totalPrice - (productToRemove.price * productToRemove.quantity);
            return {
                ...state,
                shoppingCart: new_products,
                totalPrice: newTotal
            }

        case ADD_QUANTITY:
            let productToIncrease = state.shoppingCart.find(product => product.id === action.id);
            productToIncrease.quantity += 1;
            return {
                ...state,
                totalPrice: state.totalPrice += productToIncrease.price
            }
        
        case SUB_QUANTITY:
            let productToDecrease = state.shoppingCart.find(product => product.id === action.id);
            if(productToDecrease.quantity === 1) {
                let new_products = state.shoppingCart.filter(product => action.id !== product.id);
                return {
                    ...state,
                    shoppingCart: new_products,
                    totalPrice: state.totalPrice - productToDecrease.price
                }
            }
            else {
                productToDecrease.quantity -= 1;
                let newTotal = state.totalPrice - productToDecrease.price;
                return {
                    ...state,
                    totalPrice: newTotal
                }
            }

        default:
            return state;
    }
}

export default cartReducer;