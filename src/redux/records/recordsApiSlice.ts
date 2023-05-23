import { IRecord } from '../../models/IRecord';
import { apiSlice } from '../api/apiSlice';

const apiWithTag = apiSlice.enhanceEndpoints({ addTagTypes: ['Records'] });

export const recordsApiSlice = apiWithTag.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    fetchAllRecords: build.query<IRecord[], number>({
      query: () => ({
        url: '/api/v2/appointments',
        method: 'GET',
      }),
      // работаем с нашими данными
      providesTags: (result) => ['Records'],
    }),
  }),
});

export const { useFetchAllRecordsQuery } = recordsApiSlice;
