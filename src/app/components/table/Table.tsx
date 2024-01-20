import Body from "./Body"
import Head from "./Head"

const Table = ({ data, deleteable, editable, fields, heads }: { data: object[], deleteable: boolean, editable: boolean, fields: string[], heads: string[] }) => {
    return <table className="min-w-full text-center text-sm font-light">
        <Head heads={heads}></Head>
        <Body data={data} deleteable={deleteable} editable={editable} fields={fields}></Body>
    </table>
}

export default Table