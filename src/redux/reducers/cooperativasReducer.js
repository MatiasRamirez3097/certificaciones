"use client";
import { createReducer } from "@reduxjs/toolkit";
import { getCooperativas, getCooperativaById } from "../actions/cooperativasActions";

const initialState = {
    selectedCooperativa: {},
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
        .addCase(getCooperativaById.fulfilled, (state, action) => {
            const newState = { ...state, selectedCooperativa: action.payload }
            return newState
        })
        .addCase(getCooperativaById.rejected, (state, action) => {
            const newState = { ...state, selectedCooperativa: {} }
        })
)

export default cooperativasReducer