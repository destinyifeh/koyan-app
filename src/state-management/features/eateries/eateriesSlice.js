import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  orderType: {
    choice: null,
    route: null,
  },
  seatNumber: null,
  paymentMethod: null,
};

export const eateriesSlice = createSlice({
  name: 'eateries',
  initialState,
  reducers: {
    getOrderChoice: (state, action) => {
      console.log(action.payload, 'state mgr');
      state.orderType.choice = action.payload.choice;
      state.orderType.route = action.payload.route;
    },

    getPaymentMethod: (state, action) => {
      console.log(action.payload, 'payment method state');
      state.paymentMethod = action.payload;
    },

    saveSeatNumber: (state, action) => {
      console.log(action.payload, 'seatNo state');
      state.seatNumber = action.payload;
    },
  },
});

export const {getOrderChoice, getPaymentMethod, saveSeatNumber} =
  eateriesSlice.actions;
export default eateriesSlice.reducer;
