import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  orderType: {
    choice: null,
    route: null,
  },
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
  },
});

export const {getOrderChoice} = eateriesSlice.actions;
export default eateriesSlice.reducer;
