import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface Pizza {
  id: number;
  imageUrl: string;
  name: string;
  types: string[];
  sizes: number[];
  price: number;
};

interface PizzasState {
  pizzas: Pizza[],
  isLoading: boolean,
};

const initialState: PizzasState = {
  pizzas: [],
  isLoading: true,
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas: (state, action: PayloadAction<Pizza[]>) => {
      state.pizzas = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setPizzas, setIsLoading } = pizzasSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPizzas = (state: RootState) => state.pizzas.pizzas;
export const selectIsLoading = (state: RootState) => state.pizzas.isLoading;

export default pizzasSlice.reducer;