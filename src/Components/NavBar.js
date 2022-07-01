import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function NavBar() {

    return (
        <>
            <Link to="/">Flights</Link>
            {/* <Link to="/search/:name">Search</Link> */}
            <Link to="/topflights">Top Flights</Link>
            <SearchBar />
        </>
    )
}

export default NavBar;