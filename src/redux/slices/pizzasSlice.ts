import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@store'
import { PizzaFromApi } from '@interfacePizza'

interface PizzasState {
  pizzas: PizzaFromApi[],
  status: 'loading' | 'success' | 'error',
};

const initialState: PizzasState = {
  pizzas: [],
  status: 'loading',
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas: (state, action: PayloadAction<PizzaFromApi[]>) => {
      state.pizzas = action.payload;
    },
    updatingStatus: (state, action: PayloadAction<'loading' | 'success' | 'error'>) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => { },
});

export const { setPizzas, updatingStatus } = pizzasSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPizzaById = (id: string) => (state: RootState) => state.pizzas.pizzas.find((pizza) => pizza.id === id);
export const selectPizzas = (state: RootState) => state.pizzas.pizzas;
export const selectStatus = (state: RootState) => state.pizzas.status;

export default pizzasSlice.reducer;