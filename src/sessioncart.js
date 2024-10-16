const CART_STORAGE_KEY = "cart";

const getCartItemId = (productId, priceId) => {
  return productId + priceId;
};

const SessionCart = {
  addItem(productId, priceId) {
    const cartItemId = getCartItemId(productId, priceId);
    const cart = this.getItems();
    const cartItem = cart[cartItemId];
    if (cartItem) {
      this.incrementCartItemQuantity(cartItemId);
    } else {
      this.addCartItemToCart(cart, productId, priceId, 1);
    }
  },

  removeCartItem(cartItemId) {
    const cart = this.getItems();
    const cartItem = cart[cartItemId];
    if (!cartItem) return;
    delete cart[cartItemId];
    sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  },

  incrementCartItemQuantity(cartItemId) {
    const cart = this.getItems();
    const cartItem = cart[cartItemId];
    if (!cartItem) return;
    cartItem.quantity = cartItem.quantity + 1;
    sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  },

  decrementCartItemQuantity(cartItemId) {
    const cart = this.getItems();
    const cartItem = cart[cartItemId];
    if (!cartItem) return;
    if (cartItem.quantity == 1) {
      delete cart[cartItemId];
      sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } else {
      cartItem.quantity = cartItem.quantity - 1;
      sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  },

  addCartItemToCart(cart, productId, priceId, quantity) {
    const cartItemId = productId + priceId;
    (cart[cartItemId] = {
      item: productId,
      price: priceId,
      quantity: quantity,
    }),
      sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  },

  getItems() {
    const cart = sessionStorage.getItem(CART_STORAGE_KEY);
    if (cart) {
      return JSON.parse(cart);
    } else {
      return {};
    }
  },

  getCartQuantity() {
    let cart;
    let quantity = 0;
    const cartString = sessionStorage.getItem(CART_STORAGE_KEY);
    if (cartString) {
      cart = JSON.parse(cartString);
      Object.keys(cart).forEach((key) => {
        quantity = quantity + cart[key].quantity;
      });
    }
    return quantity;
  },

  clearCart() {
    sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify({}));
  },
};

export default SessionCart;
