import { pizzasSlice } from './pizzasSlice';
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
  pizzasLength: number,
};

const initialState: BasketState = {
  pizzas: [],
  pizzasLength: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addPizza: (state, action: PayloadAction<Pizza>) => {
      const existingPizzaIndex = state.pizzas.findIndex(
        pizza => pizza.id === action.payload.id && pizza.price === action.payload.price
      );
      if (existingPizzaIndex !== -1) state.pizzas[existingPizzaIndex].numberOfPizzas += 1;
      else state.pizzas.push({ ...action.payload });

      state.pizzasLength += 1;
    },
    clearPizzas: (state) => {
      state.pizzas = [];
    },
    changeNumberOfPizzas: (state, action: PayloadAction<{ id: number, price: number, action: string }>) => {
      const existingPizzaIndex = state.pizzas.findIndex(
        pizza => pizza.id === action.payload.id && pizza.price === action.payload.price
      );
      if (existingPizzaIndex !== -1 && action.payload.action === '+') {
        state.pizzas[existingPizzaIndex].numberOfPizzas += 1
        state.pizzasLength += 1;
      }
      else {
        state.pizzas[existingPizzaIndex].numberOfPizzas -= 1
        state.pizzasLength -= 1;
        if (state.pizzas[existingPizzaIndex].numberOfPizzas === 0) state.pizzas.splice(existingPizzaIndex, 1);
      };
    },
  },
});

export const { addPizza, clearPizzas, changeNumberOfPizzas } = basketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBasketPizzas = (state: RootState) => state.basket.pizzas;
export const selectBasketPizzasLength = (state: RootState) => state.basket.pizzasLength;

export default basketSlice.reducer;