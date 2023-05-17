import { apiSlice } from '../api/apiSlice';

const apiWithTag = apiSlice.enhanceEndpoints({ addTagTypes: ['Analyzes'] });

export const analyzesApiSlice = apiWithTag.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    fetchAnalyzes: build.query<any, any>({
      query: () => ({
        url: '/api/v2/analysis',
        method: 'GET',
      }),
    }),
  }),
});

export const { useFetchAnalyzesQuery } = analyzesApiSlice;
