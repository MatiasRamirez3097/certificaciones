const FormFields = (values = null, cooperativas = [], coopFilter) => {
    console.log(cooperativas)
    const fields = [
        { name: "cooperativa", label: "Cooperativa", type: "select", value: "", values: cooperativas, onChange: coopFilter },
        { name: "tarea", label: "Tarea", type: "text", value: "" },
        { name: "lugar", label: "Lugar", type: "text", value: "" },
        { name: "plazoEjecucion", label: "Plazo de ejecucion", type: "number", value: 0 }
    ]

    if (values) {
        return fields.map((val, index) => {
            return {
                ...val,
                value: values[val.name]
            }
        })
    }
    return fields
}

export default FormFields