const Cart = require('../models/cart.model');
const Product = require('../models/product.model')

const addToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    /*const { userId } = req.session;
    /*
    // Verificar si el usuario tiene una sesión activa
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }*/

    // Verificar si el producto existe en la base de datos
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Verificar si el producto ya está en el carrito del usuario
    let cart = await Cart.findOne({  status: 'active', productId });
    if (cart) {
      cart.quantity += quantity;
    } else {
      cart = new Cart({
        
        productId,
        quantity,
      });
    }

    await cart.save();

    res.status(200).json({  
        data : {cart},
         message: 'Product added to cart successfully' });
  } catch (error) {
    next(error);
  }
};

const removeFromCart= async(req, res, next)=> {
  const cartItemId  = req.params.id;

  try {
    // Buscar el registro del carrito por el ID
    const cartItem = await Cart.findById(cartItemId);

    if (!cartItem) {
      // Si el registro no existe, devolver un error 404
      return res.status(404).json({ message: 'Registro de carrito no encontrado' });
    }

    // Eliminar el registro del carrito
    await cartItem.remove();

    return res.status(200).json({ message: 'Producto eliminado del carrito' });
  } 
    catch (error) {
      return next(error);
     }
};



module.exports = { addToCart, removeFromCart };