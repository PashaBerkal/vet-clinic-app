import { IPet, PetRequestParams } from '../../models/IPet';
import { apiSlice } from '../api/apiSlice';

const apiWithTag = apiSlice.enhanceEndpoints({ addTagTypes: ['Pet'] });

export const petsApiSlice = apiWithTag.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    fetchAllPets: build.query<IPet[], PetRequestParams>({
      query: (arg) => {
        const { name } = arg;
        return {
          url: '/api/v1/pets',
          method: 'GET',
          params: {
            name,
          },
        };
      },
      // работаем с нашими данными
      providesTags: (result) => ['Pet'],
    }),
  }),
});

export const { useFetchAllPetsQuery } = petsApiSlice;
