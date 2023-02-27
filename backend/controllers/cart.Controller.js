const Category = require('../models/cart.model');

const addToCard = async(req, res, next)=> {
    const { productId, quantity } = req.body;
  
    try {
      // Verificar si el producto ya está en el carrito
      const existingItem = await Cart.findOne({ productId });
  
      if (existingItem) {
        // Si el producto ya está en el carrito, actualizar la cantidad
        existingItem.quantity += quantity;
        await existingItem.save();
        return res.status(200).json({ message: 'Producto agregado al carrito' });
      } else {
        // Si el producto no está en el carrito, crear un nuevo registro
        const cartItem = new Cart({ productId, quantity });
        await cartItem.save();
        return res.status(200).json({ message: 'Producto agregado al carrito' });
      }
    } catch (error) {
      return next(error);
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



module.exports = { addToCard, removeFromCart };