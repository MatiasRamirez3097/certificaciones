import { FaPen, FaTrash } from "react-icons/fa6"
import Button from "../button/Button"

const Body = ({ data, deleteable, editable, fields }: { data: any[], deleteable: boolean, editable: boolean, fields: string[] }) => {
    console.log(data)
    return <tbody>
        {
            data.length > 0 && data.map((item, index) => {
                return <tr key={index}>
                    {
                        Object.keys(item).map(key => {
                            return fields.includes(key) ? <td className="whitespace-nowrap px-6 py-4" key={key}>{item[key]}</td> : undefined
                        })
                    }
                    {
                        editable || deleteable ?
                            <td className="flex justify-center">
                                {
                                    editable ? <button
                                        className="relative px-4 py-3 flex justify-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                                    >
                                        <FaPen></FaPen>
                                    </button> : undefined
                                }
                                {
                                    deleteable ? <button
                                        className="relative px-4 py-3 flex justify-center space-x-4 rounded-lg text-white bg-gradient-to-r bg-red-600"
                                    >
                                        <FaTrash></FaTrash>
                                    </button> : undefined
                                }
                            </td> : undefined
                    }
                </tr>
            })
        }
    </tbody >
}

export default Body