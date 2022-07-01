function SearchBar({ setSearchQuery, onClick }) {
    return (
        <div>
            <input name="search" onChange={(e) => setSearchQuery(e.target.value)} value="" />
            <button onClick={onClick}>Search</button>
        </div>
    )
}

export default SearchBar;