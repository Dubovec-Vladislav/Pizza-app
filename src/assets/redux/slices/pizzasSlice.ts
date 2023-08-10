import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios'

interface FetchPizzasParams {
  category: number | string;
  sortBy?: string;
  order?: string;
}

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async ({ category, sortBy, order }: FetchPizzasParams) => {
    const END_POINT_URL = 'https://64ca3494b2980cec85c315c6.mockapi.io/items';
    const response = await axios.get(`${END_POINT_URL}?category=${category}&sortBy=${sortBy}&order=${order}`);
    return response.data
  }
);

interface Pizza {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  prices: number[];
};

interface PizzasState {
  pizzas: Pizza[],
  status: string,
};

const initialState: PizzasState = {
  pizzas: [],
  status: '', // loading, success, error
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas: (state, action: PayloadAction<Pizza[]>) => {
      state.pizzas = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.pizzas = [];
      state.status = 'loading';
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = 'success';
      state.pizzas = action.payload;
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.pizzas = [];
      state.status = 'error';
    });
  },
});

export const { setPizzas } = pizzasSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPizzas = (state: RootState) => state.pizzas.pizzas;
export const selectStatus = (state: RootState) => state.pizzas.status;

export default pizzasSlice.reducer;