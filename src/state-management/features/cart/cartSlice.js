import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += item.price; // Update the total price for the item
      } else {
        state.cart.push({...item, quantity: 1, totalPrice: item.price});
      }
      state.totalPrice += item.price; // Update the total price for the cart
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cart.find(cartItem => cartItem.id === itemId);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price; // Assuming the price is stored in each item
        state.totalPrice += existingItem.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cart.find(cartItem => cartItem.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price; // Assuming the price is stored in each item
        state.totalPrice -= existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) {
        state.cart = state.cart.filter(cartItem => cartItem.id !== itemId);
        state.totalPrice -= existingItem.price;
      }
    },

    removeFromCart: (state, action) => {
      const index = state.cart.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    updateCart: (state, action) => {
      const index = state.cart.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.cart[index] = action.payload;
      }
    },
    clearCart: state => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
