"use client";
import Table from "../components/table/Table"
import { fields, heads } from '../../utils/cooperaviesTable'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { getCooperativas } from "@/redux/actions/cooperativasActions";
import Search from "../components/search/Search";
import Button from "../components/button/Button";
import Modal from "../components/modal/Modal";

const Cooperatives = () => {
    const dispatch = useDispatch()
    const { cooperativas } = useSelector((store: any) => store.cooperativasReducer)
    const [searchText, setSearchText] = useState('')
    const [showModal, setShowModal] = useState(true)

    const search = (value: string) => {
        setSearchText(value)
        dispatch(getCooperativas(value))
    }


    useEffect(() => {
        dispatch(getCooperativas())
    }, [])
    return <>
        <div className="grid grid-cols-8 min-w-full">
            <Search
                input={searchText}
                action={search}
            />
            <button
                className="relative px-4 py-3 flex items-center justify-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400"

            >
                +
            </button>
        </div>
        <Table
            data={cooperativas}
            deleteable
            editable
            fields={fields}
            heads={heads}
        />
        {
            showModal &&
            <Modal
                showFunction={() => setShowModal(false)}
            ></Modal>
        }

    </>
}

export default Cooperatives