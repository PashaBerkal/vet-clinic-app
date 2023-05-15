/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import storageUtil from '../../utils/storageUtil';
import { IPet } from '../../models/IPet';

type IPets = IPet[];

export type PetsState = {
  pets: IPets;
};

const initialState = {
  pets: [],
};

export const petSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    updatePets(state, action) {
      state.pets = action.payload;
    },
  },
});

export const { updatePets } = petSlice.actions;

export default petSlice.reducer;
