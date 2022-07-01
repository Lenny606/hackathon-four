import { Rings } from 'react-loader-spinner';
import { DateTime } from 'luxon';
import AirplaneSymbol from './img/AirplaneSymbol.svg';

function TopFlights({ data, loading }) {

    // console.log(loading);
    return (
        <>
            {loading && <Rings
                height="100"
                width="100"
                color='#19a991'
                ariaLabel='loading'
            />}
            {data.map((destination, index) => {
                return <div key={index} className='destination destination__vlc'>

                    <img className="airplane" src={AirplaneSymbol} />
                    <p>Departure: <strong>{destination.cityFrom}</strong>: {DateTime.fromMillis(destination.dTimeUTC * 1000).toFormat('DD HH:mm')} -  Arrival: <strong>{destination.cityTo}</strong>: {DateTime.fromMillis(destination.aTimeUTC * 1000).toFormat('DD HH:mm')}</p>
                    <p>Duration: {destination.fly_duration}</p>
                    <p>Price: {destination.price} EUR</p>

                </div>
            })}
        </>
    )
}

export default TopFlights;