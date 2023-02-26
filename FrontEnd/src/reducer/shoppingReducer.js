// import { TYPES } from "../actions/shoppingActions";


// export const shoppingInitialState = {
//     products: [],
//     cart: [],
//     openCardModal: false,
// };


// export const shoppingReducer = (state, action) => {
//     switch (action.type) {
//         case TYPES.READ_STATE: {
//             return {
//                 ...state,
//                 products: action.payload[0],
//                 cart: action.payload[1]
//             };
//         }

//         case TYPES.ADD_TO_CART: {

//             const newItem = state.products.find(
//                 (product) => product.id === action.payload);

//             const itemInCart = state.cart.find((item) => item.id === newItem.id);
            
//             return (!itemInCart) 
//                 ?{
//                     ...state,
//                     cart: [...state.cart, {newItem}] 
//                 }
//                 :{
//                     ...state,
//                     cart: [...state.cart]
//                 }
//             }

//         case TYPES.OPEN_CARD_MODAL: {
//             return state.openCardModal === false
//                 ? { openCardModal: state.openCardModal = true }
//                 : { ...state };
//         }
//         case TYPES.CLOSE_CARD_MODAL: {
//             return state.openCardModal === true
//                 ? { openCardModal: state.openCardModal = false }
//                 : { ...state };
//         }

//         default:
//             return state;
//     }
// };


