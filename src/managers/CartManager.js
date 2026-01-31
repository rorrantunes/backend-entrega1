import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

class CartManager {
  constructor(path) {
    this.path = path;
  }

  async getCarts() {
    try {
      const data = await fs.readFile(this.path, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  async saveCarts(carts) {
    await fs.writeFile(this.path, JSON.stringify(carts, null, 2));
  }

  async createCart() {
    const carts = await this.getCarts();

    const newCart = {
      id: uuidv4(),
      products: []
    };

    carts.push(newCart);
    await this.saveCarts(carts);

    return newCart;
  }

 async getCartById(cid) {
  const carts = await this.getCarts();
  return carts.find(cart => cart.id === cid);
}

  async addProductToCart(cid, pid) {
    const carts = await this.getCarts();
    const cartIndex = carts.findIndex(cart => cart.id === cid);

    if (cartIndex === -1) return null;

    const cart = carts[cartIndex];

    const productIndex = cart.products.findIndex(
      item => item.product === pid
    );

    if (productIndex === -1) {
      cart.products.push({
        product: pid,
        quantity: 1
      });
    } else {
      cart.products[productIndex].quantity += 1;
    }

    carts[cartIndex] = cart;
    await this.saveCarts(carts);

    return cart;
  }
}

export default CartManager;
