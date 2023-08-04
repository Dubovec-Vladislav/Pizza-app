import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface FilterState {
  activeCategoryItem: string,
}

const initialState: FilterState = {
  activeCategoryItem: 'Все',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategoryItem: (state, action: PayloadAction<string>) => {
      state.activeCategoryItem = action.payload;
    },
  },
})

export const { setActiveCategoryItem } = filterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCategoryItem = (state: RootState) => state.filter.activeCategoryItem;

export default filterSlice.reducer