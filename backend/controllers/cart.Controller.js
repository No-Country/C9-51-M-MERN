const Cart = require("../models/cart.model");
const Product = require("../models/product.model");

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
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    // Verificar si la cantidad solicitada es mayor que la disponible

    if (product.quantity < quantity) {
      return res
        .status(400)
        .json({
          message: "No hay suficientes unidades disponibles de este producto.",
        });
    }

    // Verificar si el producto ya está en el carrito del usuario
    const existingCartItem = await Cart.findOne({ status: "active", productId });

    if (existingCartItem && existingCartItem.quantity + quantity > product.quantity) {

      existingCartItem.quantity = quantity;
      await existingCartItem.save();
      return res.status(200).json({  data:{existingCartItem}, message: 'Producto actualizado en el carrito.' });
    } else {
      newCartItem = new Cart({
        productId,
        quantity,
      });
    }

    await newCartItem.save();

    res.status(200).json({
      data: { newCartItem },
      message: "Product added to cart successfully",
    });
  } catch (error) {
    next(error);
  }
};

const removeFromCart = async (req, res, next) => {
  const cartItemId = req.params.id;

  try {
    // Buscar el registro del carrito por el ID
    const cartItem = await Cart.findById(cartItemId);

    if (!cartItem) {
      // Si el registro no existe, devolver un error 404
      return res
        .status(404)
        .json({ message: "Registro de carrito no encontrado" });
    }

    // Eliminar el registro del carrito
    await cartItem.remove();

    return res.status(200).json({ message: "Producto eliminado del carrito" });
  } catch (error) {
    return next(error);
  }
};

module.exports = { addToCart, removeFromCart };
