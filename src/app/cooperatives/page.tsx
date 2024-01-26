"use client";
import Table from "../components/table/Table"
import { fields, heads } from '../../utils/cooperaviesTable'
import { useEffect, useState } from "react";
import { createCooperativa, getCooperativaById, getCooperativas, updateCooperativa } from "@/redux/actions/cooperativasActions";
import Search from "../components/search/Search";
import Modal from "../components/modal/Modal";
import EditForm from "./forms/editForm";
import editFields from "./forms/editFields";
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
const Cooperatives = () => {
    const dispatch = useAppDispatch()
    const { selectedCooperativa, cooperativas } = useAppSelector((store: any) => store.cooperativasReducer)
    const [searchText, setSearchText] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [edit, setEdit] = useState(false)
    const search = (value: string) => {
        setSearchText(value)
        dispatch(getCooperativas(value))
    }

    const getById = async (id: string) => {
        await dispatch(getCooperativaById(id))
    }

    const submitForm = async (values) => {
        if (edit) {
            await dispatch(updateCooperativa({
                id: selectedCooperativa._id,
                ...values
            }))
        } else {
            await dispatch(createCooperativa({
                ...values
            }))
        }
        setShowModal(false)
        dispatch(getCooperativas())
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
                onClick={() => {
                    setEdit(false)
                    setShowModal(true)
                }}
            >
                +
            </button>
        </div>
        <Table
            data={cooperativas}
            deleteable
            editable
            editableAction={async (val: any) => {
                await getById(val)
                setEdit(true)
                setShowModal(true)
            }}
            fields={fields}
            heads={heads}
        />
        {
            showModal &&
            <Modal>
                <EditForm
                    action={() => setShowModal(false)}
                    fields={edit ? editFields(selectedCooperativa) : editFields()}
                    sendSubmit={(values) => submitForm(values)}
                    submitText="Confirmar"
                    coop={selectedCooperativa}
                />
            </Modal>
        }

    </>
}

export default Cooperatives