'use-client';
import { Field } from "formik"
import { useState } from 'react';
import CustomAutocomplete from "../autocomplete/Autocomplete"
import Input from "../input/Input"
import { TEInput } from "tw-elements-react"

import "react-datepicker/dist/react-datepicker.css";

const InputFieldWithLabel = ({
    button = null,
    error = null,
    label,
    name,
    type,
    touched = null,
    values = null
}: {
    button: null | any,
    error: null | string,
    label: string,
    name: string,
    type: string,
    touched: null | boolean,
    values: any
}) => {

    return <>
        <label
            className="block text-gray-500 text-sm font-bold mb-2"
            htmlFor="name">
            {label}
        </label>
        <Field
            name={name}
        >
            {({ field }: { field: any }) => (
                type != 'select' && type != 'autocomplete' && type != 'month' ? <TEInput
                    name={name}
                    type={type}
                    {...field}
                /> :

                    type == 'select' ?
                        <select
                            className="appearance-none 
                        bg-transparent 
                        w-full 
                        text-gray-700 
                        py-1 
                        px-2 
                        leading-tight 
                        border-b
                        border-cyan-500
                        focus:outline-none"
                            {...field}
                        >
                            <option disabled value={""}> -- select an option -- </option>
                            {
                                values.map((value: any, index: number) => {
                                    return <option
                                        className="bg-black text-white"
                                        key={index}
                                        value={value.value}
                                    >
                                        {value.label}
                                    </option>
                                })
                            }
                        </select>
                        :
                        type == 'autocomplete' &&
                        <CustomAutocomplete
                            {...field}
                            button={button}
                            values={values}
                        />
            )}

        </Field>
        {
            error && touched ? (
                <div className="text-red-500 text-sm">{error}</div>
            ) : null
        }
    </>
}

export default InputFieldWithLabel