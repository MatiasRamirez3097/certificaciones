const Head = ({ heads }: { heads: string[] }) => {
    return <thead className="border-b font-medium dark:border-neutral-500">
        <tr>
            {
                heads.map((head, i) => {
                    return <th scope="col" className="px-6 py-4" key={i}>{head}</th>
                })
            }
        </tr>
    </thead>
}

export default Head