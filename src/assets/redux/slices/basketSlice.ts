import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface Pizza {
  id: number;
  imageUrl: string;
  name: string;
  types: number;
  sizes: number;
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
      const existingPizza = state.pizzas.find(pizza => pizza.id === action.payload.id && pizza.price === action.payload.price);
      if (existingPizza) {
        console.log(existingPizza);
        debugger;
      } else {
        state.pizzas = [...state.pizzas, action.payload];
        debugger;
      }
    },
    // setIsLoading: (state, action: PayloadAction<boolean>) => {
    //   state.isLoading = action.payload;
    // },
  },
});

export const { addPizza } = basketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBasketPizzas = (state: RootState) => state.pizzas.pizzas;

export default basketSlice.reducer;