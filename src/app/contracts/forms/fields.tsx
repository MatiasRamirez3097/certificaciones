const FormFields = (
    cooperativaValues = [],
    tareaValues = [],
    tareaFunction,
    lugarValues = [],
    lugarFunction,
    plazoEjecucionValues = [],
    plazoEjecucionFunction
) => {
    const fields = [
        {
            name: "cooperativa",
            label: "Cooperativa",
            type: "autocomplete",
            value: "",
            values: cooperativaValues
        },
        {
            name: "tarea",
            label: "Tarea",
            type: "autocomplete",
            value: "",
            values: tareaValues,
            button: true,
            buttonFunction: tareaFunction
        },
        {
            name: "lugar",
            label: "Lugar",
            type: "autocomplete",
            value: "",
            values: lugarValues,
            button: true,
            buttonFunction: lugarFunction
        },
        {
            name: "plazoEjecucion",
            label: "Plazo de ejecucion",
            type: "autocomplete",
            value: "",
            values: plazoEjecucionValues,
            button: true,
            buttonFunction: plazoEjecucionFunction
        },
        { name: "periodo", label: "Periodo", type: "month", value: "" },
        { name: "contratoUrl", label: "Url contrato", type: "text", value: "" }
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