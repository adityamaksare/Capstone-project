import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Homepage } from "./Pages/Homepage";
import Menu from './Pages/Menu';
import About from './Pages/About';
import Reservations from './Pages/Reservations';
import LoginPage from './Pages/LoginPage';
import Orderonline from './Pages/Orderonline';

function App() {
  return (
    <div className="App container-fluid p-0 m-0">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          < Route path='/about' element={<About/>}/>
          < Route path='/reservations' element={<Reservations/>}/>
          < Route path='/menu' element={<Menu/>}/>
          < Route path='/orderonline' element={<Orderonline/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
