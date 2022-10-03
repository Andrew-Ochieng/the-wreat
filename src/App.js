import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/energy' element={ <Energy /> } />
          <Route path='/agriculture' element={ <Agriculture /> } />
          <Route path='/Transport' element={ <Transport /> } />
          <Route path='/realestate' element={ <RealEstate /> } />
          <Route path='/wastemanagement' element={ <WasteManagement /> } />
          <Route path='/create' element={ <Create /> } />
        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
