import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import sortSlice from './slices/sortSlice'

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    sort: sortSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch