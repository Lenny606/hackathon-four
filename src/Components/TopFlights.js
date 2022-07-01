import { Rings } from 'react-loader-spinner';
import { DateTime } from 'luxon';

function TopFlights({data , loading}) {

// console.log(loading);
    return (
        <>
        { loading && <Rings
        height="100"
        width="100"
        color='blue'
        ariaLabel='loading'
      />}
       {data.map((destination, index) => {
        return <div  key={index} className='destination destination__vlc'>

        <p>Departure {destination.cityFrom}: {DateTime.fromMillis(destination.dTimeUTC * 1000).toFormat('HH:mm')} -     Arrival {destination.cityTo}: {DateTime.fromMillis(destination.aTimeUTC * 1000).toFormat('HH:mm')}</p>
        <p>Duration: {destination.fly_duration}</p>
        <p>Price: {destination.price} EUR</p>
                   
         </div>
        })}
        </>
    )
}

export default TopFlights;