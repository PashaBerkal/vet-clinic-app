import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthRequestParams, AuthResponseParams, RefreshRequestParams, RefreshResponseParams } from '../models/IAuth';

export default createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ' http://45.141.79.132:8090/',
  }),
  endpoints: (build) => ({
    auth: build.mutation<AuthResponseParams, AuthRequestParams>({
      query: (bodyParams) => ({
        url: 'api/v5/auth/authenticate',
        method: 'POST',
        body: bodyParams,
      }),
    }),
    // refresh: build.mutation<RefreshResponseParams, RefreshRequestParams>({
    //   query: (bodyParams) => ({
    //     url: 'api/v5/auth/refresh',
    //     method: 'POST',
    //     body: bodyParams,
    //   }),
    // }),
  }),
});
