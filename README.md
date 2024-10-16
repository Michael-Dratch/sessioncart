# SessionCart

A simple JavaScript object for managing a shopping cart stored in session storage. The `SessionCart` object provides methods to add, remove, and update items in the cart, as well as retrieve the total quantity of items.

## Installation

You can install the package via npm:

```bash
npm install sessioncart
```

## Usage

To use the SessionCart, import it into your JavaScript file:

```javascript
import SessionCart from "sessioncart";
```

## API Reference

### `SessionCart.addItem(productId, priceId)`

Adds an item to the cart. If the item already exists, it increments the quantity.

- **Parameters:**
  - `productId`: (string) The ID of the product.
  - `price`: (string) The ID of the price. Must be a string.

### `SessionCart.removeCartItem(cartItemId)`

Removes an item from the cart.

- **Parameters:**
  - `cartItemId`: (string) The ID of the item to be removed. IDs are attributes of the cartItem objects returned by the SessionCart.

### `SessionCart.incrementCartItemQuantity(cartItemId)`

Increments the quantity of a cart item.

- **Parameters:**
  - `cartItemId`: (string) The ID of the item to be incremented.

### `SessionCart.decrementCartItemQuantity(cartItemId)`

Decrements the quantity of a cart item. If the quantity reaches zero, the item is removed from the cart.

- **Parameters:**
  - `cartItemId`: (string) The ID of the item to be decremented.

### `SessionCart.getItems()`

Returns an object representing all items in the cart.

### `SessionCart.getCartQuantity()`

Returns the total quantity of items in the cart.

### `SessionCart.clearCart()`

Clears all items from the cart.

## Contributing

Contributions are welcome! Here is a link to the the Github repository: [sessioncart](https://github.com/Michael-Dratch/sessioncart)

## License

This package is licensed under the MIT License. See the [LICENSE](https://opensource.org/licenses/MIT) file for more information.
