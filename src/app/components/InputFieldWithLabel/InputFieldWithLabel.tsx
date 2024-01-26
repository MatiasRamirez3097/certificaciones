import { Field } from "formik"

const InputFieldWithLabel = ({ error = null, label, name, type, touched = null, values = null }: {
    error: null | string, label: string, name: string, type: string, touched: null | boolean, values: any
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
                type != 'select' ? <input
                    className="appearance-none 
                        bg-transparent 
                        w-full 
                        text-gray-300 
                        py-1 
                        px-2 
                        leading-tight 
                        border-b
                        border-cyan-500
                        focus:outline-none"
                    type={type}
                    {...field}
                /> :
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
                                return <option key={index} value={value} >{value}</option>
                            })
                        }
                    </select>

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