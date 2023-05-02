import { apiSlice } from '../api/apiSlice';
import { AuthRequestParams, AuthResponseParams } from '../../models/IAuth';

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
  }),
});

// export const { useLoginMutation } = authApiSlice;
