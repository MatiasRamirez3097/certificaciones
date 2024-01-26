"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from '../../utils/Api'

const createCooperativa = createAsyncThunk('createCooperativa', async (data: any) => {
    try {
        const res = await server.post('/cooperativas/create', {
            ...data
        })
        return res.data.response
    } catch (err) {
        console.log(err)
    }
})

const getCooperativas = createAsyncThunk('getCooperativas', async (value: string | undefined = '') => {
    try {
        const res = await server.get(`/cooperativas/${value}`)

        return res.data.response
    } catch (err) {
        console.log(err)
        return []
    }
})

const getCooperativaById = createAsyncThunk('getCooperativaById', async (value: string) => {
    try {
        const res = await server.get(`/cooperativas/getbyid/${value}`)
        return res.data.response
    } catch (err) {
        console.log(err)
        return {}
    }
})

const updateCooperativa = createAsyncThunk('updateCooperativa', async (data: any) => {
    try {
        const res = await server.put(`/cooperativas/update/${data.id}`, {
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

export { createCooperativa, getCooperativas, getCooperativaById, updateCooperativa }