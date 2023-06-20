import { AppointmentRequestParams, IFreeTimeRecordRequestParams, IFreeTimeRecordResponceParams, IMainRecord, ISurgeonsResponceParams, IVisit, IVisitHistory, IVisitHistoryRecordRequestParams, MainRecordRequestParams } from '../../models/IVisit';
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
    fetchVisitHistory: build.query<IVisitHistory, IVisitHistoryRecordRequestParams>({
      query: (arg) => {
        const { visitId } = arg;
        return {
          url: '/api/v4/visit',
          method: 'GET',
          params: {
            visit_id: visitId,
          },
        };
      },
    }),
    fetchFreeTime: build.query<IFreeTimeRecordResponceParams, IFreeTimeRecordRequestParams>({
      query: (arg) => {
        const { doctorId, date } = arg;
        return {
          url: '/api/v1/get_free_time',
          method: 'GET',
          params: {
            doctor_id: doctorId,
            date,
          },
        };
      },
    }),
    fetchSurgeons: build.query<ISurgeonsResponceParams, object>({
      query: () => ({
        url: '/api/v1/get_surgeons',
        method: 'GET',
      }),
    }),
    fetchAppointment: build.mutation<object, AppointmentRequestParams>({
      query: (bodyParams) => ({
        url: `/api/v1/make_appointment?pet_id=${bodyParams.pet_id}&date=${bodyParams.date}&surgeon_id=${bodyParams.surgeon_id}&type=${bodyParams.type}`,
        method: 'POST',
        // body: bodyParams,
      }),
    }),
  }),
});

export const { useFetchRecordsQuery, useFetchVisitsQuery, useFetchVisitHistoryQuery, useFetchFreeTimeQuery, useFetchSurgeonsQuery, useFetchAppointmentMutation } = visitApiSlice;
