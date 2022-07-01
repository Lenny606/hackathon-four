import './App.css';
import Footer from './Footer';
import DropDown from './Components/DropDown';
import NavBar from './Components/NavBar';
import TopFlights from './Components/TopFlights';
import Home from './Components/Home';
import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {

    const [destVLC, setDestVLC] = useState([]);
    const [loading, setLoading] = useState(false)

    const url = 'https://api.skypicker.com/flights?fly_from=PRG&fly_to=VLC&limit=5&partner=data4youcbp202106';

    const loadData = async () => {

        try {

            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();

            setDestVLC(data.data);
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
                <main className='main'>

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/topflights' element={<TopFlights loading={loading} data={destVLC} />} />
                        <Route path='/flights' element={<DropDown />} />
                    </Routes>

                </main>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
