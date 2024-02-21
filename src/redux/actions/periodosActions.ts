"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from '../../utils/Api'

const createPeriodo = createAsyncThunk('createPeriodo', async (data: any) => {
    try {
        const res = await server.post('/periodos/create', {
            ...data
        })
        return res.data.response
    } catch (err) {
        console.log(err)
    }
})

const getPeriodos = createAsyncThunk('getPeriodos', async (value: string | undefined = '') => {
    try {
        const res = await server.get(`/periodos/${value}`)

        return res.data.response
    } catch (err) {
        console.log(err)
        return []
    }
})

const getPeriodoById = createAsyncThunk('getPeriodoById', async (value: string) => {
    try {
        const res = await server.get(`/periodos/getbyid/${value}`)
        return res.data.response
    } catch (err) {
        console.log(err)
        return {}
    }
})

const updatePeriodo = createAsyncThunk('updatePeriodo', async (data: any) => {
    try {
        const res = await server.put(`/periodos/update/${data.id}`, {
            ...data
        })
        return {
            response: 'ok'
        }
    } catch (err) {
        return {
            error: err
        }
    }
})

export { createPeriodo, getPeriodos, getPeriodoById, updatePeriodo }