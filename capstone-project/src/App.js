import './App.css';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Highlights } from './Highlights';


function App() {
  return (
    <div className="App container-fluid p-0">
     <Navbar/>
     <Hero/>
     <Highlights/>
    </div>
  );
}

export default App;
