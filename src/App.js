import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import TopFlights from './Components/TopFlights';
import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
 
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false)
 
  const url = '';

  const loadData = async () => {

    try {

      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.message);


      //read the data and access them accordingly if one object or array etc...
      //console.log(data[0].name);
      setState(data);
    }
    catch (err) {

    }
    finally {

      setLoading(false);

    }

  }
 
  useEffect(() => {
    loadData();
    //add dependancy variable to call function after re-render    
  }, []);
 
  return (
    <>
    <BrowserRouter>
      <nav className='navigation' >
        <NavBar />
      </nav>

      <Routes>
        <Route path='/topflights' element={<TopFlights loading={loading} data={state} />} />
        {/* <Route path='/search/:name' element={<Search />} /> */}
      </Routes>



    </BrowserRouter>
  </>
  );
}

export default App;
