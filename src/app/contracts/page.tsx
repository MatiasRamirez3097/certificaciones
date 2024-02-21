"use client";
import Search from "../components/search/Search"
import Table from "../components/table/Table"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { createContrato, getContratoById, getContratos, updateContrato } from "@/redux/actions/contratosActions";
import { fields, heads } from '@/utils/contractsTable'
import Modal from "../components/modal/Modal";
import Form from '../components/form/Form'
import formFields from "./forms/fields";
import { getCooperativas } from "@/redux/actions/cooperativasActions";

const Contracts = () => {
    const dispatch = useAppDispatch()
    const { selectedContrato, contratos } = useAppSelector((store: any) => store.contratosReducer)
    const { cooperativas } = useAppSelector((store) => store.cooperativasReducer)
    const [searchText, setSearchText] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [edit, setEdit] = useState(false)
    const search = (value: string) => {
        setSearchText(value)
        dispatch(getContratos(value))
    }
    const getById = async (id: string) => {
        await dispatch(getContratoById(id))
    }

    const submitForm = async (values) => {
        if (edit) {
            await dispatch(updateContrato({
                id: selectedContrato._id,
                ...values
            }))
        } else {
            await dispatch(createContrato({
                ...values
            }))
        }
        setShowModal(false)
        dispatch(getContratos())
    }

    return <>
        <div className="grid grid-cols-8 min-w-full">
            <Search
                input={searchText}
                action={search}
            />
            <button
                className="relative px-4 py-3 flex items-center justify-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                onClick={async () => {
                    await dispatch(getCooperativas())
                    setEdit(false)
                    setShowModal(true)
                }}
            >
                +
            </button>
        </div>
        <Table
            data={contratos}
            deleteable
            editable
            editableAction={async (val: any) => {
                await getById(val)
                await dispatch(getCooperativas())
                setEdit(true)
                setShowModal(true)
            }}
            fields={fields}
            heads={heads}
        />
        {
            showModal &&
            <Modal>
                <Form
                    action={() => setShowModal(false)}
                    fields={edit ? formFields(selectedContrato) : formFields(null, cooperativas.map((value, index) => {
                        console.log('este es el map', value._id)
                        return {
                            value: value._id,
                            label: value.nombre
                        }
                    }), dispatch(() => getCooperativas()))}
                    sendSubmit={(values) => submitForm(values)}
                    submitText="Confirmar"
                />
            </Modal>
        }
    </>
}

export default Contracts