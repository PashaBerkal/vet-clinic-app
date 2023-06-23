/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type AnimalTypeSelector = {
  width: string;
  label: string;
  options: Array<string>;
  name: string;
  active: string;
};

enum VisitType {
  All = 'All',
  First = 'FIRST',
  SECONDARY = 'SECONDARY',
  VACCINATION = 'VACCINATION',
}

type ReceiveSelector = {
  newAlignment: string;
  visitType: VisitType;
};

export type VisitsState = {
  animalTypeFilter: Array<AnimalTypeSelector>;
  receiveFilter: Array<ReceiveSelector>;
  receiveActive: VisitType;
};

const initialState: VisitsState = {
  animalTypeFilter: [
    {
      active: '',
      name: 'nickname',
      width: '34%',
      label: 'Кличка',
      options: ['Рыжик'],
    },
    {
      active: '',
      name: 'kind',
      width: '33%',
      label: 'Вид питомца',
      options: ['Собака'],
    },
    {
      active: '',
      name: 'breed',
      width: '33%',
      label: 'Порода',
      options: ['Русский охотничий спаниель'],
    },
  ],
  receiveFilter: [
    {
      newAlignment: '1',
      visitType: VisitType.All,
    },
    {
      newAlignment: '2',
      visitType: VisitType.First,
    },
    {
      newAlignment: '3',
      visitType: VisitType.SECONDARY,
    },
    {
      newAlignment: '4',
      visitType: VisitType.VACCINATION,
    },
  ],
  receiveActive: VisitType.All,
};

export const visitsSlice = createSlice({
  name: 'visits',
  initialState,
  reducers: {
    resetVisitsState(state) {
      state.animalTypeFilter = initialState.animalTypeFilter;
      state.receiveFilter = initialState.receiveFilter;
      state.receiveActive = initialState.receiveActive;
    },
    setAnimalTypeFilter(state, action) {
      const { name, value } = action.payload;
      const index = state.animalTypeFilter.findIndex((el) => el.name === name);
      state.animalTypeFilter[index].active = value;
    },
    setReceiveFilter(state, action) {
      const { newAlignment } = action.payload;
      const index = state.receiveFilter.findIndex((el) => el.newAlignment === newAlignment);
      state.receiveActive = state.receiveFilter[index].visitType;
    },
  },
});

export const { setAnimalTypeFilter, setReceiveFilter, resetVisitsState } = visitsSlice.actions;

export default visitsSlice.reducer;
