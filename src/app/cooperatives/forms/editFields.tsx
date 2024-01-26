const editFields = (values = null) => {
    const fields = [
        { name: "nombre", label: "Nombre", type: "text", value: "" },
        { name: "cuit", label: "CUIT", type: "text", value: "" },
        { name: "matriculaNacional", label: "Matricula Nacional", type: "text", value: "" },
        { name: "matriculaProvincial", label: "Matricula Provincial", type: "text", value: "" },
        { name: "domicilio", label: "Domicilio", type: "text", value: "" },
        { name: "tel", label: "Tel/Celular", type: "text", value: "" },
        { name: "email", label: "Email", type: "text", value: "" }

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

export default editFields