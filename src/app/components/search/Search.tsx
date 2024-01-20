interface SearchProps {
    action: any,
    searchText: string
}

const Search = ({ action, searchText }: SearchProps) => {

    return <input
        type="search"
        className="mb-4 col-span-7 rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon1"
        onChange={(e) => action(e.target.value)}
        value={searchText}
    />
}

export default Search