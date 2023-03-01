import { useEffect, createContext, useReducer } from "react";
import { TYPES } from "../actions/ShoppActions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducer/shoppingReducer";
import axios from "axios";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

/* Solicitud y cambio de Estado de Productos */
  const getDataProd = async () => {
    const ENDPOINT = {
      products: "https://e-commerce-backend-70bp.onrender.com/products",
    };
    const { data } = await axios.get(ENDPOINT.products);
    return {
      resProducts: data.products,
    };
  };
  
  const updateStateProd = async () => {
    const { resProducts } = await getDataProd();
    //console.log(resProducts);
    return dispatch({
      type: TYPES.READ_STATE_PRODUCTS,
      payload: resProducts,
    });
  };
  
/* Solicitud y cambio de Estado de Productos del Carrito */
  const getDataCart = async () => {
    const ENDPOINT = {
      cart: "https://e-commerce-backend-70bp.onrender.com/cart",
    };
    const { data } = await axios.get(ENDPOINT.cart);
    return {
      resCart: data.cart,
    };
  };
  const updateStateCart = async () => {
    const { resCart } = await getDataCart();
    return dispatch({
      type: TYPES.READ_STATE_CART,
      payload: resCart,
    });
  };

/* Agregar Productos al Carrito */
  const addToCart = async (_id) => {
    const delay = 100;
    const ENDPOINT = {
      products: "https://e-commerce-backend-70bp.onrender.com/products",
      cart: "https://e-commerce-backend-70bp.onrender.com/cart"
    };
    const resProducts = await axios.get(ENDPOINT.products)
    const resCart = await axios.get(ENDPOINT.cart);
    
    const productsList = resProducts.data.products,
      cartItems = resCart.data.cart; 

    const newItem = productsList.find((product) => product._id === _id),
      itemInCart = cartItems.find((item) => item._id === _id);

    if (!itemInCart) {
      await axios.post("https://e-commerce-backend-70bp.onrender.com/cart")
      newItem.quantity = 1;
    } else {
      await axios.put(`https://e-commerce-backend-70bp.onrender.com/cart/${itemInCart._id}`)
      itemInCart.quantity = itemInCart.quantity += 1;
    }

    dispatch({ type: TYPES.ADD_TO_CART, payload: _id });

    setTimeout(async () => {
      await updateStateProd();
      await updateStateCart();
    }, delay);
  };

/* Eliminar uno/todos los productos del carrito */
    const delFromCart = async (_id, all) => {
      let delay = 100;
      const resCart = await axios.get("https://e-commerce-backend-70bp.onrender.com/cart")
      const cartItems = resCart.data.cart

      const itemToDelete = cartItems.find((item) => item._id === _id)

      if (itemToDelete) {
        let endpoint = `https://e-commerce-backend-70bp.onrender.com/cart/${itemToDelete._id}`
        if (!all) {
          if(itemToDelete.quantity > 1) {
            await axios.put(endpoint)
            itemToDelete.quantity = itemToDelete.quantity - 1;
          }else{
            await axios.delete(endpoint)
          }
        } else {
          await axios.delete(endpoint)
        }
      }

      setTimeout(async () => {
        await updateStateProd();
        await updateStateCart();
      }, delay)
    };

/* Limpiar Carrito */
    const clearCart = async () => {
      let delay = 100;
      const resCart = await axios.get("https://e-commerce-backend-70bp.onrender.com/cart")
      const cartItems = resCart.data.cart

      cartItems.forEach(async item => {
        let endpoint = `https://e-commerce-backend-70bp.onrender.com/cart/${item._id}`;
      
        await axios.delete(endpoint)
      });

      setTimeout(async () => {
        await updateStateProd();
        await updateStateCart();
      }, delay)
    };

  useEffect(() => {
    updateStateProd();
    updateStateCart();
  }, []);

  const products = state.products,
    cart = state.cart;

  const data = {
    state,
    dispatch,
    updateStateProd,
    updateStateCart,
    addToCart,
    delFromCart,
    clearCart,
    products,
    cart,
  };

  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

export default ProductsProvider;
