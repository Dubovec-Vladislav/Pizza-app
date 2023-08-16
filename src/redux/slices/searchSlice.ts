import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@store'

export interface SearchState {
  searchValue: string,
};

const initialState: SearchState = {
  searchValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSearchValue = (state: RootState) => state.search.searchValue;

export default searchSlice.reducer;