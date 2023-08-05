import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface FilterState {
  categoryItems: string[],
  activeCategoryItem: string,
  activeCategoryItemID: number,
};

const initialState: FilterState = {
  categoryItems: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
  activeCategoryItem: 'Все',
  activeCategoryItemID: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategoryItem: (state, action: PayloadAction<string>) => {
      state.activeCategoryItem = action.payload;
      state.activeCategoryItemID = state.categoryItems.indexOf(action.payload);
    },
  },
});

export const { setActiveCategoryItem } = filterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCategoryItems = (state: RootState) => state.filter.categoryItems;
export const selectActiveCategoryItem = (state: RootState) => state.filter.activeCategoryItem;
export const selectActiveCategoryItemID = (state: RootState) => state.filter.activeCategoryItemID;

export default filterSlice.reducer;