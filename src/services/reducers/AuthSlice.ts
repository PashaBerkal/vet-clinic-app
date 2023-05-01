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
    logOut: (state) => {
      storageUtil.clearTokens();
      state.isAuth = false;
    },
  },
});

export default authSlice.reducer;
