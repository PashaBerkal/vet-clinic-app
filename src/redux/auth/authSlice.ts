/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import storageUtil from '../../utils/storageUtil';

type AuthState = {
  isAuth: boolean;
};

const initialState: AuthState = {
  isAuth: !!storageUtil.getAccessToken(),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload;
    },
    setCredentials: (state, action) => {
      const { data } = action.payload;
      storageUtil.setTokens({
        acces_token: data.access_token,
        refresh_token: data.refresh_token,
      });
      state.isAuth = true;
    },
    logOut: (state) => {
      storageUtil.clearTokens();
      state.isAuth = false;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
