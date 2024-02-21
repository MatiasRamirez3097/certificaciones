"use client";
import { createReducer } from "@reduxjs/toolkit";
import { getPeriodos, getPeriodoById } from "../actions/periodosActions";

const initialState = {
    selectedPeriodo: {},
    periodos: []
}

const periodosReducer = createReducer(initialState,
    (builder) => builder
        .addCase(getPeriodos.fulfilled, (state, action) => {
            const newState = { ...state, periodos: action.payload }
            return newState
        })
        .addCase(getPeriodos.rejected, (state, action) => {
            const newState = { ...state, periodos: action.payload }
            return newState
        })
        .addCase(getPeriodoById.fulfilled, (state, action) => {
            const newState = { ...state, selectedPeriodo: action.payload }
            return newState
        })
        .addCase(getPeriodoById.rejected, (state, action) => {
            const newState = { ...state, selectedPeriodo: {} }
        })
)

export default periodosReducer