import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload, 'cart state');
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const index = state.cart.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    updateCartItem: (state, action) => {
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

export const {addToCart, removeFromCart, updateCartItem, clearCart} =
  cartSlice.actions;
export default cartSlice.reducer;
