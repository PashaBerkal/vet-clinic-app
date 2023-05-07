import { IPet } from '../../models/IPet';
import { apiSlice } from '../api/apiSlice';

const apiWithTag = apiSlice.enhanceEndpoints({ addTagTypes: ['Pet'] });

export const petsApiSlice = apiWithTag.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    fetchAllPets: build.query<IPet[], number>({
      query: () => ({
        url: '/api/v1/pets',
        method: 'GET',
      }),
      // работаем с нашими данными
      providesTags: (result) => ['Pet'],
    }),
  }),
});

export const { useFetchAllPetsQuery } = petsApiSlice;
