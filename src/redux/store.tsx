"use client";

import { configureStore } from '@reduxjs/toolkit'
import cooperativasReducer from './reducers/cooperativasReducer'
import contratosReducer from './reducers/contratosReducer'
import periodosReducer from './reducers/periodosReducer'
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        contratosReducer,
        cooperativasReducer,
        periodosReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
