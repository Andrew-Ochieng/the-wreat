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
  const [blogs, setBlogs] = useState([])


    useEffect(() => {
        blogData()

    }, [])

    const blogData = () => {
        const apiUrl = 'https://the-wreat-api.herokuapp.com/energy'
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setBlogs(data)
            })
            .catch((err) => console.log(err))
    }

    
    const addBlogs = (blog) => {
      setBlogs([...blogs, blog]);
    };
  

    



  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={ <Home blogs={blogs} /> }/>
          <Route path='/energy' element={ <Energy blogs={blogs} /> } />
          <Route path='/agriculture' element={ <Agriculture blogs={blogs} /> } />
          <Route path='/transport' element={ <Transport blogs={blogs}  /> } />
          <Route path='/realestate' element={ <RealEstate blogs={blogs} /> } />
          <Route path='/wastemanagement' element={ <WasteManagement blogs={blogs} /> } />
          <Route path='/create' element={ <Create addBlogs={addBlogs} /> } />
        </Routes>

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
