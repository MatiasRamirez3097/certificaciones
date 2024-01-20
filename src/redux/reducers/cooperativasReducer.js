"use client";
import { createReducer } from "@reduxjs/toolkit";
import { getCooperativas } from "../actions/cooperativasActions";

const initialState = {
    cooperativas: []
}

const cooperativasReducer = createReducer(initialState,
    (builder) => builder
        .addCase(getCooperativas.fulfilled, (state, action) => {
            const newState = { ...state, cooperativas: action.payload }
            return newState
        })
        .addCase(getCooperativas.rejected, (state, action) => {
            const newState = { ...state, cooperativas: action.payload }
            return newState
        })
)

export default cooperativasReducer