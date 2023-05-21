import { IPet, IPetFullInfo, PetFullInfoRequestParams, PetRequestParams } from '../../models/IPet';
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
    }),
    fetchPet: build.query<IPetFullInfo, PetFullInfoRequestParams>({
      query: (arg) => {
        const { petId } = arg;
        return {
          url: '/api/v1/get_pet',
          method: 'GET',
          params: {
            pet_id: petId,
          },
        };
      },
    }),
  }),
});

export const { useFetchAllPetsQuery, useFetchPetQuery } = petsApiSlice;
