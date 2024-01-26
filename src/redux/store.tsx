"use client";

import { configureStore } from '@reduxjs/toolkit'
import cooperativasReducer from './reducers/cooperativasReducer'
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        cooperativasReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
