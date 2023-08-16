import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@store'

export interface CategoryState {
  categoryItems: string[],
  activeCategory: string,
};

const initialState: CategoryState = {
  categoryItems: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
  activeCategory: 'Все',
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setActiveCategory } = categorySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCategoryItems = (state: RootState) => state.category.categoryItems;
export const selectActiveCategory = (state: RootState) => state.category.activeCategory;
export const selectCategoryIdByName = (activeCategory: string) => (state: RootState) => state.category.categoryItems.indexOf(activeCategory);

export default categorySlice.reducer;