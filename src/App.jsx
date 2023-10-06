import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Home';
import Service from "./Service";
import Historia from "./Historia";
import Informacion from "./Informacion";


  function App() {
    return (
      <Router>
      <div>

      {/* */}
      
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="Service" element={<Service/>} />
            <Route path="Historia" element={<Historia/>} />
            <Route path="Informacion" element={<Informacion/>} />

            
          </Routes>
  
          </div>
          </Router>
    )
  }
  
  export default App;