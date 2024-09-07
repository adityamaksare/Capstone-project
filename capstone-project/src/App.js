import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Homepage } from "./Pages/Homepage";



function App() {
  return (
    <div className="App container-fluid p-0 m-0">
      <Navbar/>
    {/* ----- */}
      <Homepage/>
      {/* ------ */}
      <Footer/>
    </div>
  );
}

export default App;
