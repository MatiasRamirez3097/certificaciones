import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Form, Formik } from 'formik'
import InputFieldWithLabel from '../../components/InputFieldWithLabel/InputFieldWithLabel'

const renderFields = (errors: any, fields: any, touched: any, values: any) => {
    return fields.map((field: any, i: any) => {
        return <InputFieldWithLabel
            error={errors[field.name]}
            label={field.label}
            name={field.name}
            touched={touched[field.name]}
            values={values ? values : undefined}
            key={i}
            type={field.type}
        />

    })
}

const EditForm = ({ action, action2, coop = {}, fields, schema, sendSubmit = null, submitText }: {
    action: any, action2: any, coop: any, fields: any[], schema: any, sendSubmit: any, submitText: string
}) => {
    const dispatch = useDispatch()
    console.log('esto llega', fields)
    return <Formik
        initialValues={fields.reduce((o, key) => ({ ...o, [key.name]: key.value }), {})}
        validationSchema={schema}
        onSubmit={(values, actions) => {
            sendSubmit(values, actions)
        }}
    >
        {({ errors, touched }) => (
            <Form className="px-8 pt-6 pb-8 mb-4 w-full">
                <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full">
                    <div className="sm:flex sm:items-start w-full">
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                            <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Edit</h3>
                            {
                                renderFields(errors, fields, touched, coop)
                            }
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                        {submitText}
                    </button>
                    <button
                        onClick={action}
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                        Cancel
                    </button>
                </div>
            </Form>
        )}
    </Formik >
}

export default EditForm