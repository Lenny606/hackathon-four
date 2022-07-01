import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Logo from './Logo';

function NavBar() {

    return (
        <>
            <Logo />
            <Link to="/flights"><strong>Flights</strong></Link>
            {/* <Link to="/search/:name">Search</Link> */}
            <Link to="/topflights"><strong>Top Flights</strong></Link>
            <SearchBar />
        </>
    )
}

export default NavBar;