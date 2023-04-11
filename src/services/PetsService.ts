import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPet } from '../models/IPet';

export default createApi({
  reducerPath: 'petsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ' http://45.141.79.132:8090/',
  }),
  tagTypes: ['Pet'],
  endpoints: (build) => ({
    fetchAllPets: build.query<IPet[], number>({
      query: () => ({ url: '/api/v1/pets' }),
      // работаем с нашими данными
      providesTags: (result) => ['Pet'],
    }),
  }),
});
