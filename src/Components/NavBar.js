import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Logo from './Logo';

function NavBar() {

    return (
        <>
            <Logo />
            <Link to="/flights">Flights</Link>
            {/* <Link to="/search/:name">Search</Link> */}
            <Link to="/topflights">Top Flights</Link>
            <SearchBar />
        </>
    )
}

export default NavBar;