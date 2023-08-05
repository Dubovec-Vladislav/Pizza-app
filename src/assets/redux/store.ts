import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './slices/categorySlice'
import sortSlice from './slices/sortSlice'
import pizzasSlice from './slices/pizzasSlice'

export const store = configureStore({
  reducer: {
    category: categorySlice,
    sort: sortSlice,
    pizzas: pizzasSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch