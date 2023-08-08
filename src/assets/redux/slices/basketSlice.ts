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
  totalNumberOfPizzas: number,
  totalPriceOfPizzas: number,
};

const initialState: BasketState = {
  pizzas: [],
  totalNumberOfPizzas: 0,
  totalPriceOfPizzas: 0,
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
      state.totalNumberOfPizzas += 1;
      state.totalPriceOfPizzas += action.payload.price;
    },
    clearPizzas: (state) => {
      state.pizzas = [];
    },
    changeNumberOfPizzas: (state, action: PayloadAction<{ id: number, price: number, action: string }>) => {
      const pizzaIndex = state.pizzas.findIndex(
        pizza => pizza.id === action.payload.id && pizza.price === action.payload.price
      );
      if (action.payload.action === '+') {
        state.pizzas[pizzaIndex].numberOfPizzas += 1;
        state.totalNumberOfPizzas += 1;
        state.totalPriceOfPizzas += action.payload.price;
      }
      else if (action.payload.action === '-') {
        state.pizzas[pizzaIndex].numberOfPizzas -= 1;
        state.totalNumberOfPizzas -= 1;
        state.totalPriceOfPizzas -= action.payload.price;
        if (state.pizzas[pizzaIndex].numberOfPizzas === 0) state.pizzas.splice(pizzaIndex, 1);
      };
    },
  },
});

export const { addPizza, clearPizzas, changeNumberOfPizzas } = basketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBasketPizzas = (state: RootState) => state.basket.pizzas;
export const selectBasketTotalNumberOfPizzas = (state: RootState) => state.basket.totalNumberOfPizzas;
export const selectBasketTotalPriceOfPizzas = (state: RootState) => state.basket.totalPriceOfPizzas;

export default basketSlice.reducer;