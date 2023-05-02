/* eslint-disable max-len */
/* eslint implicit-arrow-linebreak: off */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import authReducer from '../auth/authSlice';
import { authApiSlice } from '../auth/authApiSlice';
import { petsApiSlice } from '../pets/petsApiSlice';

// const rootReducer = combineReducers({
//   auth: authReducer,
//   [apiSlice.reducerPath]: apiSlice.reducer,
//   [authApiSlice.reducerPath]: authApiSlice.reducer,
//   [petsApiSlice.reducerPath]: petsApiSlice.reducer,
// });

const rootReducer = {
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
};

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => (
      getDefaultMiddleware().concat(apiSlice.middleware)
    ),
  });

// export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
