import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Rings } from 'react-loader-spinner';
import { DateTime } from 'luxon';
import AirplaneSymbol from './img/AirplaneSymbol.svg';

function DropDown() {

    const [loading, setLoading] = useState(false)

    const [newDepart, setNewDepart] = useState('PRG');
    const [newDest, setNewDest] = useState('VLC');
    const [results, setResults] = useState([]);
    const [stopover, setStopover] = useState(false);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(5);
    


    const url = `https://api.skypicker.com/flights?fly_from=${newDepart}&fly_to=${newDest}&limit=5&partner=data4youcbp202106`;

    const stopoverUrl = `https://api.skypicker.com/flights?fly_from=${newDepart}&fly_to=${newDest}&limit=5&max_stopovers=0&partner=data4youcbp202106`;

    const loadData = async () => {

        try {

            setLoading(true);
            const response = await fetch( stopover ? stopoverUrl : url);
            const data = await response.json();
            console.log(data);
            setResults(data.data);

            console.log(response);

            //read the data and access them accordingly if one object or array etc...
            //console.log(data[0].name);
            // setNewDest(data.data);
        }
        catch (err) {

        }
        finally {

            setLoading(false);
     

        }
        console.log(stopover);
    }
    


    // useEffect(() => {
    //     loadData();

    //     //add dependancy variable to call function after re-render    
    // }, []);


    return (
       
        <div className="dropdown">


            <div className="dropdown__menu">
                <select name="fly_from" onChange={(e) => setNewDepart(e.target.value)}>
                    <option >From</option>
                    <option value="VLC" >Valencia</option>
                    <option value="BCN" >Barcelona</option>
                    <option value="MAD" >Madrid</option>
                    <option value="LIN" >Milano</option>
                    <option value="ATH" >Athens</option>
                </select>


                <select name="fly_to" onChange={(e) => setNewDest(e.target.value)}>
                    <option >To</option>
                    <option value="PRG">Prague</option>
                    <option value="BER">Berlin</option>
                    <option value="WAW">Warsaw</option>
                    <option value="PED">Pardubice</option>
                </select>

                <button onClick={() => loadData()}>Find Flights</button>
                <div className="check">
                    <input type="checkbox" id="checkbox" name="direct-flights" onChange={(e)=>setStopover(e.target.checked)} />
                    <label htmlFor="checkbox"> Direct Flights Only</label>
                </div>
               
            </div>

            {loading && <Rings
                height="100"
                width="100"
                color='#19a991'
                ariaLabel='loading'
            />}
             
            {!!results.length ? (
                results.map((destination, index) => {
                

                    return  <div key={index} className='destination destination__vlc'>
    
                       
                        <img className="airplane" src={AirplaneSymbol} />
                        <p>Departure: <strong>{destination.cityFrom}</strong>: {DateTime.fromMillis(destination.dTimeUTC * 1000).toFormat('DD HH:mm')} - Arrival: <strong>{destination.cityTo}</strong>: {DateTime.fromMillis(destination.aTimeUTC * 1000).toFormat('DD HH:mm')}</p>
                        <p>Duration: {destination.fly_duration}</p>
                        <p>Price: {destination.price} EUR</p>
    
                        
                    </div>
                })
                 
            ) : <p></p>}
                        
            {}

        </div>
    )
}

export default DropDown;