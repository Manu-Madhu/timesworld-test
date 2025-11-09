import {
  configureStore
} from '@reduxjs/toolkit';
import countriesReducer from './countriesSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    user: userReducer,
  },
});