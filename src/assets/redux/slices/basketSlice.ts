import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface Pizza {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  numberOfPizzas: number;
};

interface BasketState {
  pizzas: Pizza[],
};

const initialState: BasketState = {
  pizzas: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addPizza: (state, action: PayloadAction<Pizza>) => {
      const existingPizza = state.pizzas.find(pizza => pizza.id === action.payload.id);
      state.pizzas = [...state.pizzas, action.payload];
    },
    // setIsLoading: (state, action: PayloadAction<boolean>) => {
    //   state.isLoading = action.payload;
    // },
  },
});

export const { } = basketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPizzas = (state: RootState) => state.pizzas.pizzas;
export const selectIsLoading = (state: RootState) => state.pizzas.isLoading;

export default basketSlice.reducer;