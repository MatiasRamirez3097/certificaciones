"use-client";
import { useEffect } from "react";
import { TESelect } from 'tw-elements-react'

const CustomAutocomplete = ({ button, values }: { button: boolean, values: any }) => {
    return <>
        <div className="flex">
            <TESelect
                className={button ? 'w-11/12 pr-2' : 'w-full'}
                data={values}
                search
                searchLabel="Buscar..."
            />
            {button && <button
                className="w-1/12 relative px-2 py-1 flex items-center justify-center rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                onClick={() => {
                    console.log('hola')
                    /*await dispatch(getCooperativas())
                    setEdit(false)
                    setShowModal(true)*/
                }}

            >
                +
            </button >
            }
        </div>
    </>
}

export default CustomAutocomplete