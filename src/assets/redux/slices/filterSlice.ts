import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface FilterState {
  categoryItems: string[],
  activeCategory: string,
  activeCategoryID: number,
};

const initialState: FilterState = {
  categoryItems: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
  activeCategory: 'Все',
  activeCategoryID: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
      state.activeCategoryID = state.categoryItems.indexOf(action.payload);
    },
  },
});

export const { setActiveCategory } = filterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCategoryItems = (state: RootState) => state.filter.categoryItems;
export const selectActiveCategory = (state: RootState) => state.filter.activeCategory;
export const selectActiveCategoryID = (state: RootState) => state.filter.activeCategoryID;

export default filterSlice.reducer;