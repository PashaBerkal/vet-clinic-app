/* eslint-disable max-len */
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import storageUtil from '../../utils/storageUtil';
import { logOut } from '../auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://45.141.79.132:8090/',
  prepareHeaders: (headers) => {
    const token = storageUtil.getAccessToken();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 403) {
    console.log('sending refresh token');

    const refreshResult = await baseQuery('/refresh', api, extraOptions);
    if (refreshResult?.data) {
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
