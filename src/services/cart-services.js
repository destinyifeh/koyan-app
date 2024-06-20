import {
  addToCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  updateCart,
} from '../state-management/features/cart/cartSlice';
import {store} from '../state-management/store';

const removeCartItem = item => {
  return store.dispatch(removeFromCart(item));
};

const clearCartitems = () => {
  return store.dispatch(clearCart());
};

const addItemToCart = item => {
  return store.dispatch(addToCart(item));
};

const updateCartItem = item => {
  return store.dispatch(updateCart(item));
};

const increaseItemQuantity = itemId => {
  return store.dispatch(increaseQuantity(itemId));
};

const decreaseItemQuantity = itemId => {
  return store.dispatch(decreaseQuantity(itemId));
};

const checkSelectedEatery = eateryName => {
  const cart = store.getState().cart.cart;

  const selectedEatery = cart.find(
    cartItem => cartItem.eateryName === eateryName,
  );
  console.log(selectedEatery, 'selected eatery');

  return !!selectedEatery;
};

const retrieveCartItems = () => {
  const cart = store.getState().cart.cart;
  return cart;
};

export {
  addItemToCart,
  checkSelectedEatery,
  clearCartitems,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeCartItem,
  retrieveCartItems,
  updateCartItem,
};
