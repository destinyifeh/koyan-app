import {configureStore} from '@reduxjs/toolkit';
import eateriesReducer from './features/eateries/eateriesSlice';
import globalReducer from './features/global/globalSlice';
export const store = configureStore({
  reducer: {
    global: globalReducer,
    eateries: eateriesReducer,
  },
});
