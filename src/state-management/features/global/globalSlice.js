import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentRoute: null,
  previousRoute: null,
  appStatus: null,
  cusLocationData: null,
  userAddressData: null,
  userLocationData: null,
  remoteConfigs: {
    currentAppVersion: null,
    is_force_update: null,
  },
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    getcurrentRoute: (state, action) => {
      state.currentRoute = action.payload;
    },
    getPreviousRoute: (state, action) => {
      state.previousRoute = action.payload;
    },
    getAppState: (state, action) => {
      console.log(action.payload, 'app state');
      state.appStatus = action.payload;
    },
    getUserLocationData: (state, action) => {
      console.log(action.payload, 'user location');
      state.userLocationData = action.payload;
    },

    getUserAddressData: (state, action) => {
      console.log(action.payload, 'address location');
      state.userAddressData = action.payload;
    },

    getCustomerLocationData: (state, action) => {
      console.log(action.payload, 'merchant location');
      state.cusLocationData = action.payload;
    },
    getRemoteConfigs: (state, action) => {
      console.log(action.payload, 'remote configs');
      state.remoteConfigs.currentAppVersion = action.payload.currentAppVersion;
      state.remoteConfigs.is_force_update = action.payload.is_force_update;
    },
  },
});

export const {
  getPreviousRoute,
  getcurrentRoute,
  getAppState,
  getUserLocationData,
  getUserAddressData,
  getCustomerLocationData,
  getRemoteConfigs,
} = globalSlice.actions;
export default globalSlice.reducer;
