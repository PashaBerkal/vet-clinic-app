/* eslint implicit-arrow-linebreak: off */
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import authReducer, { AuthState } from '../auth/authSlice';
import appointmentReducer, { AppointmentState } from '../appointment/appointment';

const rootReducer = {
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  appointment: appointmentReducer,
};

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  });

export type RootState = {
  auth: AuthState;
  appointment: AppointmentState;
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
