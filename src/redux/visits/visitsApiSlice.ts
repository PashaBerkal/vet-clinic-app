import { IPet } from '../../models/IPet';
import { IMainRecord, IVisit, MainRecordRequestParams } from '../../models/IVisit';
import { apiSlice } from '../api/apiSlice';

const apiWithTag = apiSlice.enhanceEndpoints({ addTagTypes: ['MainRecord'] });

export const visitApiSlice = apiWithTag.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    fetchRecords: build.query<IMainRecord[], MainRecordRequestParams>({
      query: (arg) => {
        const { maxCount, petId } = arg;
        return {
          url: '/api/v2/appointments',
          method: 'GET',
          params: {
            max_count: maxCount,
            pet_id: petId,
          },
        };
      },
    }),
    fetchVisits: build.query<IVisit[], MainRecordRequestParams>({
      query: (arg) => {
        const { maxCount, petId } = arg;
        return {
          url: '/api/v2/visits',
          method: 'GET',
          params: {
            max_count: maxCount,
            pet_id: petId,
          },
        };
      },
    }),
  }),
});

export const { useFetchRecordsQuery, useFetchVisitsQuery } = visitApiSlice;
