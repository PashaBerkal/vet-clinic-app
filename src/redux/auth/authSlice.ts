/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import storageUtil from '../../utils/storageUtil';

export type AuthState = {
  isAuth: boolean;
};

const initialState: AuthState = {
  isAuth: !!storageUtil.getAccessToken(),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateIsAuth(state) {
      state.isAuth = !!storageUtil.getAccessToken();
    },
    setCredentials: (state, action) => {
      const { data } = action.payload;
      storageUtil.setTokens({
        acces_token: data.access_token,
        refresh_token: data.refresh_token,
      });
      state.isAuth = !!storageUtil.getAccessToken();
    },
    logOut: (state) => {
      storageUtil.clearTokens();
      state.isAuth = false;
    },
  },
});

export const { setCredentials, logOut, updateIsAuth } = authSlice.actions;

export default authSlice.reducer;
