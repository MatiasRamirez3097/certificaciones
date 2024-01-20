"use client";

import { configureStore } from '@reduxjs/toolkit'
import cooperativasReducer from './reducers/cooperativasReducer'

export const store = configureStore({
    reducer: {
        cooperativasReducer
    }
})