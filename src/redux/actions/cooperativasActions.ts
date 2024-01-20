"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from '../../utils/Api'

const getCooperativas = createAsyncThunk('getCooperativas', async (value: string = '') => {
    try {
        const res = await server.get(`/cooperativas/${value}`)

        return res.data.response
    } catch (err) {
        console.log(err)
        return []
    }
})

export { getCooperativas }