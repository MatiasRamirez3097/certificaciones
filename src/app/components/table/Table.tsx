import Head from "./Head"

const Table = ({heads}: {heads: string[]}) => {
    return <table className="min-w-full text-center text-sm font-light">
        <Head heads={heads}></Head>
    </table>
}

export default Table