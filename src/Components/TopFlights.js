import { Rings } from 'react-loader-spinner';

function TopFlights({data , loading}) {

console.log(loading);
    return (
        <>
        { loading && <Rings
        height="100"
        width="100"
        color='blue'
        ariaLabel='loading'
      />}
       {data.map((state, index) => {
        return <p className="country"key={index}>{state.name}</p>
            
        })}
        </>
    )
}

export default TopFlights;