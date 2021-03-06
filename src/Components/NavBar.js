import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Logo from './Logo';

function NavBar() {

    return (
        <>
            <Link to="/"><Logo /></Link>
            <Link to="/flights"><strong>Flights</strong></Link>

            <Link to="/topflights"><strong>Top Flights</strong></Link>
            <SearchBar />
        </>
    )
}

export default NavBar;