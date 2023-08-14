import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './slices/categorySlice'
import sortSlice from './slices/sortSlice'
import pizzasSlice from './slices/pizzasSlice'
import basketSlice from './slices/basketSlice'
import searchSlice from './slices/searchSlice'
import { pizzasApi } from './api/fetchPizzasAPI'
import { pizzaApi } from './api/fetchOnePizzaAPI'

export const store = configureStore({
  reducer: {
    category: categorySlice,
    sort: sortSlice,
    pizzas: pizzasSlice,
    basket: basketSlice,
    search: searchSlice,
    [pizzasApi.reducerPath]: pizzasApi.reducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzasApi.middleware, pizzaApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch