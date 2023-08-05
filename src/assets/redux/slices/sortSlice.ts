import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface SortTypeProperty {
  name: string,
  sortProperty: string,
  order: string,
};

interface SortState {
  sortTypes: string[],
  sortTypesProperty: SortTypeProperty[],
  activeSortType: string,
};

const initialState: SortState = {
  sortTypes: ['возрастанию популярности', 'убыванию популярности', 'дешевые', 'дорогие', 'алфавиту'],
  sortTypesProperty: [
    { name: 'возрастанию популярности', sortProperty: 'rating', order: 'asc' },
    { name: 'убыванию популярности', sortProperty: 'rating', order: 'desc' },
    { name: 'дешевые', sortProperty: 'price', order: 'asc' },
    { name: 'дорогие', sortProperty: 'price', order: 'desc' },
    { name: 'алфавиту', sortProperty: 'title', order: 'desc' }
  ],
  activeSortType: 'возрастанию популярности',
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setActiveSortType: (state, action: PayloadAction<string>) => {
      state.activeSortType = action.payload;
    },
  },
});

export const { setActiveSortType } = sortSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSortTypes = (state: RootState) => state.sort.sortTypes;
export const selectSortTypesProperty = (state: RootState) => state.sort.sortTypesProperty;
export const selectActiveSortType = (state: RootState) => state.sort.activeSortType;

export default sortSlice.reducer;