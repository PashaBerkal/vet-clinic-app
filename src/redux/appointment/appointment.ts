/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export type RecordingTime = {
  date: string;
  time: string;
};
export type VisitorInformation = {
  petName: string;
  userName: string;
  userEmail: string;
};

export type AppointmentState = {
  step: number;
  procedure: string;
  recordingTime: RecordingTime;
  isAgreementAcepted: boolean;
  visitorInformation: VisitorInformation;
  isFinishRegistration: boolean;
  isWindowOpen: boolean;
};

const initialState: AppointmentState = {
  step: 1,
  procedure: '',
  recordingTime: {
    date: '',
    time: '',
  },
  isAgreementAcepted: false,
  visitorInformation: {
    petName: '',
    userEmail: '',
    userName: '',
  },
  isFinishRegistration: false,
  isWindowOpen: false,
};

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    resetState(state) {
      state.isAgreementAcepted = initialState.isAgreementAcepted;
      state.isFinishRegistration = initialState.isFinishRegistration;
      state.procedure = initialState.procedure;
      state.recordingTime = initialState.recordingTime;
      state.step = initialState.step;
      state.visitorInformation = initialState.visitorInformation;
    },
    setIsWindowOpen(state, action) {
      const data = action.payload;
      state.isWindowOpen = data;
    },
    nextStep(state) {
      state.step += 1;
    },
    prevStep(state) {
      state.step -= 1;
    },
    setStep(state, action) {
      const { number } = action.payload;
      state.step = number;
    },
    setProcedure(state, action) {
      const data = action.payload;
      state.procedure = data;
    },
    setDateParams(state, action) {
      const data = action.payload;
      state.recordingTime = data;
    },
    setIsAgreementAcepted(state, action) {
      const data = action.payload;
      state.isAgreementAcepted = data;
    },
    setVisitorInformation(state, action) {
      const data = action.payload;
      state.visitorInformation = data;
    },
  },
});

export const {
  nextStep,
  prevStep,
  setStep,
  setProcedure,
  setDateParams,
  setIsAgreementAcepted,
  setVisitorInformation,
  setIsWindowOpen,
  resetState,
} = appointmentSlice.actions;

export default appointmentSlice.reducer;
