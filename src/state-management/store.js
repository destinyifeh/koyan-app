import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import eateriesReducer from './features/eateries/eateriesSlice';
import globalReducer from './features/global/globalSlice';
export const store = configureStore({
  reducer: {
    global: globalReducer,
    eateries: eateriesReducer,
    cart: cartReducer,
  },
});
