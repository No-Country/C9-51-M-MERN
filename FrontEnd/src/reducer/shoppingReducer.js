import { TYPES } from "../actions/ShoppActions";


export const shoppingInitialState = {
    products: [],
    cart: [],
};


export const shoppingReducer = (state, action) => {
    switch (action.type) {
        case TYPES.READ_STATE_PRODUCTS: {
            return {
                ...state,
                products: action.payload,
                
            };
        }
    
        case TYPES.READ_STATE_CART: {
            return {
                ...state,
                cart: action.payload
            };
        }

        case TYPES.ADD_TO_CART: {
            const newItem = state.products.find(
                (product) => product.id === action.payload);
            const itemInCart = state.cart.find((item) => item.id === newItem.id);
            
            return (!itemInCart) 
                ?{
                    ...state,
                    cart: [...state.cart, {newItem}] 
                }
                :{
                    ...state,
                    cart: [...state.cart]
                }
            }

        default:
            return state;
    }
};


