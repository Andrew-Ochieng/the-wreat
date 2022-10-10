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
  const [agricultureData, setAricultureData] = useState([])
  const [realEstateData, setRealEstateData] = useState([])
  const [wasteManagementData, setWasteManagementData] = useState([])
  const [isLoading, setIsLoading] = useState(true)



    useEffect(() => {
        showEnergyData()
        showTransportData()
        showAgricultureData()
        showRealEstateData()
        showWasteManagementData()

    }, [])

    const showEnergyData = () => {
        fetch('https://the-wreat-api.herokuapp.com/energy')
            .then((res) => res.json())
            .then((data) => {
                setEnergyData(data)
                setIsLoading(false)
            })
            .catch((err) => {
              setIsLoading(false)
              console.log(err)
          })
    }

    const showTransportData = () => {
      fetch('https://the-wreat-api.herokuapp.com/transport')
          .then((res) => res.json())
          .then((data) => {
              setTransportData(data)
              setIsLoading(false)
          })
          .catch((err) => {
            setIsLoading(false)
            console.log(err)
          })
    }

    const showAgricultureData = () => {
      fetch('https://the-wreat-api.herokuapp.com/agriculture')
          .then((res) => res.json())
          .then((data) => {
            setIsLoading(false)
            setAricultureData(data)
          })
          .catch((err) => {
            setIsLoading(false)
            console.log(err)
          })
    }

    const showRealEstateData = () => {
      fetch('https://the-wreat-api.herokuapp.com/real-estate')
          .then((res) => res.json())
          .then((data) => {
            setIsLoading(false)
            setRealEstateData(data)
          })
          .catch((err) => {
            setIsLoading(false)
            console.log(err)
          })
    }

    const showWasteManagementData = () => {
      fetch('https://the-wreat-api.herokuapp.com/waste-management')
          .then((res) => res.json())
          .then((data) => {
            setIsLoading(false)
            setWasteManagementData(data)
          })
          .catch((err) => {
            setIsLoading(false)
            console.log(err)
          })
    }

    
    const addBlogs = (energy) => {
      setEnergyData([...energyData, energy]);
    };
  

    



  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {isLoading && <h3 className='text-red-500 font-semibold md:text-4xl text-2xl md:mx-6 mx-4 my-4'>Page is Loading...</h3>}

        <Routes>
          <Route 
            path='/' 
            element={ 
              <Home 
                energyData={energyData} 
                transportData={transportData} 
                agricultureData={agricultureData} 
                realEstateData={realEstateData}
                wasteManagementData={wasteManagementData}
              /> }
          />
          <Route path='/energy' element={ <Energy energyData={energyData} /> } />
          <Route path='/agriculture' element={ <Agriculture agricultureData={agricultureData} /> } />
          <Route path='/transport' element={ <Transport transportData={transportData}  /> } />
          <Route path='/realestate' element={ <RealEstate realEstateData={realEstateData} /> } />
          <Route path='/wastemanagement' element={ <WasteManagement wasteManagementData={wasteManagementData} /> } />
          <Route path='/create' element={ <Create addBlogs={addBlogs} /> } />
        </Routes>

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
