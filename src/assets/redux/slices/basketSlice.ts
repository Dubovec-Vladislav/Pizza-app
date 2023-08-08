import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface Pizza {
  id: number;
  imageUrl: string;
  name: string;
  type: string;
  size: number;
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
      const existingPizzaIndex = state.pizzas.findIndex(
        pizza => pizza.id === action.payload.id && pizza.price === action.payload.price
      );
  
      if (existingPizzaIndex !== -1) {
        state.pizzas[existingPizzaIndex].numberOfPizzas += 1;
        console.log(state.pizzas[existingPizzaIndex]);
        debugger;
      } else {
        state.pizzas.push({ ...action.payload });
      }
    },
    // setIsLoading: (state, action: PayloadAction<boolean>) => {
    //   state.isLoading = action.payload;
    // },
  },
});

export const { addPizza } = basketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBasketPizzas = (state: RootState) => state.basket.pizzas;

export default basketSlice.reducer;