import './App.css';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Highlights } from './Highlights';
import { Testimonials } from './Testimonials';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App container-fluid p-0">
     <Navbar/>
     <Hero/>
     <Highlights/>
     <Testimonials/>
    </div>
  );
}

export default App;
