import { IPet } from '../../models/IPet';
import { apiSlice } from '../api/apiSlice';

const apiWithTag = apiSlice.enhanceEndpoints({ addTagTypes: ['Pet'] });

export const petsApiSlice = apiWithTag.injectEndpoints({
  //   tagTypes: ['Pet'],
  overrideExisting: true,
  endpoints: (build) => ({
    fetchAllPets: build.query<IPet[], number>({
      query: () => ({
        url: '/api/v1/pets',
        method: 'GET',
      }),
      // providesTags: (result) => ['Pet'],
      // работаем с нашими данными
      providesTags: (result) => ['Pet'],
    }),
  }),
});

// export const { useFetchAllPetsQuery } = authApiSlice;
