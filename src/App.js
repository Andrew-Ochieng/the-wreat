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
  // fetch data from api
  const [energyData, setEnergyData] = useState([])
  const [transportData, setTransportData] = useState([])


    useEffect(() => {
        showEnergyData()
        showTransportData()

    }, [])

    const showEnergyData = () => {
        const energyApi = 'https://the-wreat-api.herokuapp.com/energy'
        fetch(energyApi)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setEnergyData(data)
            })
            .catch((err) => console.log(err))
    }

    const showTransportData = () => {
      const transportApi = 'https://the-wreat-api.herokuapp.com/transport'
      fetch(transportApi)
          .then((res) => res.json())
          .then((data) => {
              console.log(data)
              setTransportData(data)
          })
          .catch((err) => console.log(err))
  }

    
    const addBlogs = (energy) => {
      setEnergyData([...energyData, energy]);
    };
  

    



  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={ <Home energyData={energyData} transportData={transportData} /> }/>
          <Route path='/energy' element={ <Energy energyData={energyData} /> } />
          <Route path='/agriculture' element={ <Agriculture /> } />
          <Route path='/transport' element={ <Transport transportData={transportData}  /> } />
          <Route path='/realestate' element={ <RealEstate /> } />
          <Route path='/wastemanagement' element={ <WasteManagement /> } />
          <Route path='/create' element={ <Create addBlogs={addBlogs} /> } />
        </Routes>

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
