/* eslint implicit-arrow-linebreak: off */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import petsApi from '../services/PetsService';
import authApi from '../services/AuthService';
import authSlice from '../services/reducers/AuthSlice';

const rootReducer = combineReducers({
  authSlice,
  [petsApi.reducerPath]: petsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => (
      getDefaultMiddleware().concat(petsApi.middleware, authApi.middleware)
    ),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
