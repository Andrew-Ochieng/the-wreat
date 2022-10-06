import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Create from './pages/Create';
import Energy from './pages/Energy';
import Agriculture from './pages/Agriculture';
import Transport from './pages/Transport';
import RealEstate from './pages/RealEstate';
import WasteManagement from './pages/WasteManagement';


function App() {
  // receive data from api
  const [energyBlogs, setEnergyBlogs] = useState([])
  const [transportBlogs, setTransportBlogs] = useState([])
  // const [agricultureBlogs, setAgricultureBlogs] = useState([])
  // const [realEstateBlogs, setRealEstateBlogs] = useState([])
  // const [wasteManagementBlogs, setWasteManagementBlogs] = useState([])


    useEffect(() => {
        energyData()
        transportData()
        // agricultureData()
        // realEstateData()
        // wasteManagementData()

    }, [])

    const energyData = () => {
        const energyApi = 'https://the-wreat-api.herokuapp.com/energy'
        fetch(energyApi)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setEnergyBlogs(data)
            })
            .catch((err) => console.log(err))
    }

    const transportData = () => {
      const transportApi = 'https://the-wreat-api.herokuapp.com/transport'
      fetch(transportApi)
          .then((res) => res.json())
          .then((data) => {
              console.log(data)
              setTransportBlogs(data)
          })
          .catch((err) => console.log(err))
    }


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={ <Home energyBlogs={energyBlogs} /> }/>
          <Route path='/energy' element={ <Energy /> } />
          <Route path='/agriculture' element={ <Agriculture /> } />
          <Route path='/Transport' element={ <Transport transportBlogs={transportBlogs}  /> } />
          <Route path='/realestate' element={ <RealEstate /> } />
          <Route path='/wastemanagement' element={ <WasteManagement /> } />
          <Route path='/create' element={ <Create /> } />
        </Routes>

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
