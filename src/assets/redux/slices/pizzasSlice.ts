import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios'

interface FetchPizzasParams {
  category: number | string;
  sortBy?: string;
  order?: string;
}

const END_POINT_URL = 'https://64ca3494b2980cec85c315c6.mockapi.io/items';

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  // thunkAPI для дополнительного функционала (сделать доп dispatch, получить какой-то state и так далее)
  async ({ category, sortBy, order }: FetchPizzasParams) => {
    const response = await axios.get(`${END_POINT_URL}?category=${category}&sortBy=${sortBy}&order=${order}`);
    return response.data
  }
);

export const fetchPizza = createAsyncThunk(
  'pizzas/fetchPizza',
  async (id: string) => {
    const response = await axios.get(`${END_POINT_URL}/${id}`);
    return response.data
  }
);

interface Pizza {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  prices: number[];
};

interface PizzasState {
  pizza: Partial<Pizza>,
  pizzas: Pizza[],
  status: 'loading' | 'success' | 'error',
};

const initialState: PizzasState = {
  pizza: {},
  pizzas: [],
  status: 'loading',
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
    // ---------------- Many Pizza ----------------- //
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

    // ----------------- One Pizza ----------------- //
    builder.addCase(fetchPizza.pending, (state, action) => {
      state.pizza = {};
      state.status = 'loading';
    });
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.status = 'success';
      state.pizza = action.payload;
    });
    builder.addCase(fetchPizza.rejected, (state, action) => {
      state.pizza = {};
      state.status = 'error';
    });
  },
});

export const { setPizzas } = pizzasSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPizza = (state: RootState) => state.pizzas.pizza;
export const selectPizzas = (state: RootState) => state.pizzas.pizzas;
export const selectStatus = (state: RootState) => state.pizzas.status;

export default pizzasSlice.reducer;