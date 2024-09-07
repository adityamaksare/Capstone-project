import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Highlights } from './Highlights';
import { Testimonials } from './Testimonials';
import { AboutSection } from './AboutSection';


function App() {
  return (
    <div className="App container-fluid p-0">
     <Navbar/>
     <Hero/>
     <Highlights/>
     <Testimonials/>
     <AboutSection/>
    </div>
  );
}

export default App;
