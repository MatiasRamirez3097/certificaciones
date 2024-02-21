"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from '../../utils/Api'

const createContrato = createAsyncThunk('createContrato', async (data: any) => {
    try {
        const res = await server.post('/contratos/create', {
            ...data
        })
        return res.data.response
    } catch (err) {
        console.log(err)
    }
})

const getContratos = createAsyncThunk('getContratos', async (value: string | undefined = '') => {
    try {
        const res = await server.get(`/contratos/${value}`)

        return res.data.response
    } catch (err) {
        console.log(err)
        return []
    }
})

const getContratoById = createAsyncThunk('getContratoById', async (value: string) => {
    try {
        const res = await server.get(`/contratos/getbyid/${value}`)
        return res.data.response
    } catch (err) {
        console.log(err)
        return {}
    }
})

const updateContrato = createAsyncThunk('updateContrato', async (data: any) => {
    try {
        const res = await server.put(`/contratos/update/${data.id}`, {
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

export { createContrato, getContratos, getContratoById, updateContrato }