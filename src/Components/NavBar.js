import {Link} from 'react-router-dom';


function NavBar() {



    return (
        <>
        <Link to="/">Flights</Link>
        {/* <Link to="/search/:name">Search</Link> */}
        <Link to="/topflights">Top Flights</Link>
        </>
    )
}

export default NavBar;