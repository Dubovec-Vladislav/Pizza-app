import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store'
import { getBasketFromLocalStorage } from '@utils/getBasketFromLocalStorage'
import { Pizza } from '@interfacePizza'


interface BasketState {
  pizzas: Pizza[],
  totalPrice: number,
  totalNumber: number,
};

const { pizzas, totalPrice, totalNumber } = getBasketFromLocalStorage();

const initialState: BasketState = {
  pizzas,
  totalPrice,
  totalNumber,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {

    // Create
    addPizza: (state, action: PayloadAction<Pizza>) => {
      const existingPizzaIndex = state.pizzas.findIndex(
        pizza => pizza.id === action.payload.id && pizza.price === action.payload.price
      );
      if (existingPizzaIndex !== -1) state.pizzas[existingPizzaIndex].numberOfPizzas += 1;
      else state.pizzas = ([...state.pizzas, action.payload]);
      state.totalNumber += 1;
      state.totalPrice += action.payload.price;
    },

    // Update
    changeNumberOfPizzas: (state, action: PayloadAction<{ id: string, price: number, action: string }>) => {
      const pizzaIndex = state.pizzas.findIndex(
        pizza => pizza.id === action.payload.id && pizza.price === action.payload.price
      );
      if (action.payload.action === '+') {
        state.pizzas[pizzaIndex].numberOfPizzas += 1;
        state.totalNumber += 1;
        state.totalPrice += action.payload.price;
      }
      else if (action.payload.action === '-') {
        state.pizzas[pizzaIndex].numberOfPizzas -= 1;
        state.totalNumber -= 1;
        state.totalPrice -= action.payload.price;
        if (state.pizzas[pizzaIndex].numberOfPizzas === 0) state.pizzas.splice(pizzaIndex, 1);
      };
    },

    // Delete
    removePizza: (state, action: PayloadAction<{ id: string, price: number }>) => {
      const pizzaIndex = state.pizzas.findIndex(
        pizza => pizza.id === action.payload.id && pizza.price === action.payload.price
      );
      const numberOfPizzas = state.pizzas[pizzaIndex].numberOfPizzas;

      state.totalNumber -= numberOfPizzas;
      state.totalPrice -= numberOfPizzas * action.payload.price;
      state.pizzas.splice(pizzaIndex, 1);
    },
    clearPizzas: (state) => {
      state.pizzas = [];
      state.totalNumber = 0;
      state.totalPrice = 0;
    },

  },
});

export const { addPizza, changeNumberOfPizzas, removePizza, clearPizzas } = basketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBasketPizzas = (state: RootState) => state.basket.pizzas;
export const selectBasketTotalNumber = (state: RootState) => state.basket.totalNumber;
export const selectBasketTotalPrice = (state: RootState) => state.basket.totalPrice;

export default basketSlice.reducer;