/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type RecordingTime = {
  date: string;
  time: string;
};
type Pet = {
  id: number;
  name: string;
};

export enum ProcedureType {
  NotSelected = '',
  Ultrasound = 'ULTRASOUND',
  Surgeon = 'SURGEON',
}

type SelectedProcedureType = ProcedureType.NotSelected | ProcedureType.Surgeon | ProcedureType.Ultrasound;

type Procedure = {
  id: number;
  name: string;
  type: SelectedProcedureType;
};

export type AppointmentState = {
  step: number;
  procedure: Procedure;
  recordingTime: RecordingTime;
  isAgreementAcepted: boolean;
  isFinishRegistration: boolean;
  isWindowOpen: boolean;
  pet: Pet;
};

const initialState: AppointmentState = {
  step: 1,
  procedure: {
    id: 0,
    name: '',
    type: ProcedureType.NotSelected,
  },
  recordingTime: {
    date: '',
    time: '',
  },
  isAgreementAcepted: false,
  pet: {
    id: 0,
    name: '',
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
      state.pet = initialState.pet;
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
    setPet(state, action) {
      const data = action.payload;
      state.pet = data;
    },
    setProcedure(state, action) {
      const data = action.payload;
      state.procedure = data;
    },
    setDateParams(state, action) {
      const data = action.payload;
      state.recordingTime = data;
      console.log({ 'state.recordingTime': state.recordingTime });
    },
    setIsAgreementAcepted(state, action) {
      const data = action.payload;
      state.isAgreementAcepted = data;
    },
  },
});

export const { nextStep, prevStep, setStep, setProcedure, setDateParams, setIsAgreementAcepted, setIsWindowOpen, resetState, setPet } = appointmentSlice.actions;

export default appointmentSlice.reducer;
