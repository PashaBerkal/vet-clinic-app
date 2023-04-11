import { combineReducers, configureStore } from '@reduxjs/toolkit';
import petsApi from '../services/PetsService';

const rootReducer = combineReducers({
  [petsApi.reducerPath]: petsApi.reducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(petsApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
