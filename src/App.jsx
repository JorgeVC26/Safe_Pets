import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Home';
import Service from "./Service";

  function App() {
    return (
      <Router>
      <div>

      {/* */}
      
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="Service" element={<Service/>} />
            
          </Routes>
  
          </div>
          </Router>
    )
  }
  
  export default App;