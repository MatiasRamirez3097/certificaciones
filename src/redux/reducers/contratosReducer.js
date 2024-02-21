"use client";
import { createReducer } from "@reduxjs/toolkit";
import { getContratos, getContratoById } from "../actions/contratosActions";

const initialState = {
    selectedContrato: {},
    contratos: []
}

const contratosReducer = createReducer(initialState,
    (builder) => builder
        .addCase(getContratos.fulfilled, (state, action) => {
            const newState = { ...state, contratos: action.payload }
            return newState
        })
        .addCase(getContratos.rejected, (state, action) => {
            const newState = { ...state, contratos: action.payload }
            return newState
        })
        .addCase(getContratoById.fulfilled, (state, action) => {
            const newState = { ...state, selectedContrato: action.payload }
            return newState
        })
        .addCase(getContratoById.rejected, (state, action) => {
            const newState = { ...state, selectedContrato: {} }
        })
)

export default contratosReducer