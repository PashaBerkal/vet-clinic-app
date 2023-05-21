import { apiSlice } from '../api/apiSlice';
import { AuthRequestParams, AuthResponseParams } from '../../models/IAuth';
import { IUser } from '../../models/IUser';

export const authApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    login: build.mutation<AuthResponseParams, AuthRequestParams>({
      query: (bodyParams) => ({
        url: 'api/v5/auth/authenticate',
        method: 'POST',
        body: bodyParams,
      }),
    }),
    fetchUser: build.query<IUser, any>({
      query: () => ({
        url: '/api/v2/client_info',
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginMutation, useFetchUserQuery } = authApiSlice;
