/* eslint-disable max-len */
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import storageUtil from '../../utils/storageUtil';
import { logOut } from '../auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://45.141.79.132:8090/',
  //   credentials: 'include',
  //   mode: 'no-cors',
  prepareHeaders: (headers) => {
    const token = storageUtil.getAccessToken();
    if (token) {
      console.log(true, true);
      headers.set('Authorization', `Bearer ${token}`);
    //   headers.set('Content-Type', 'application/json');
    //   headers.set('Accept', '*/*');
    //   headers.set('Connection', 'keep-alive');
    //   headers.set('Host', '45.141.79.132:8090');
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log({ args, api, extraOptions, result });

  if (result?.error?.status === 403) {
    console.log('sending refresh token');
    // send refresh token to get new access token
    const refreshResult = await baseQuery('/refresh', api, extraOptions);
    console.log({ refreshResult });
    if (refreshResult?.data) {
      //   const user = api.getState().auth.user;
      // store the new token
      //   api.dispatch(setCredentials({ ...refreshResult.data, user }));
      // retry the original query with new access token
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
