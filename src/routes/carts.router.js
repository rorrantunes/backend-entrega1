import { Router } from 'express';
import CartManager from '../managers/CartManager.js';
import ProductManager from '../managers/ProductManager.js';

const router = Router();

const cartManager = new CartManager('./src/data/carts.json');
const productManager = new ProductManager('./src/data/products.json');

// para crear un nuevo carrito
router.post('/', async (req, res) => {
  const newCart = await cartManager.createCart();
  res.status(201).json(newCart);
});

// para poder tener carrito por ID
router.get('/:cid', async (req, res) => {
  const { cid } = req.params;
  const cart = await cartManager.getCartById(cid);

  if (!cart) {
    return res.status(404).json({ message: 'Carrito no encontrado' });
  }

  res.json(cart.products);
});

// para agregar producto a un carrito
router.post('/:cid/product/:pid', async (req, res) => {
  const { cid, pid } = req.params;

  // para validar que exista el carrito
  const cart = await cartManager.getCartById(cid);
  if (!cart) {
    return res.status(404).json({ message: 'Carrito no encontrado' });
  }

  // para validar que exista el producto
  const product = await productManager.getProductById(pid);
  if (!product) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  const updatedCart = await cartManager.addProductToCart(cid, pid);

  res.json({
    message: 'Producto agregado al carrito',
    cart: updatedCart
  });
});

export default router;
