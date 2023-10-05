import { Link } from "react-router-dom";

function Home() {
  return (
      <div>
        {/* */}
        <header>
    
        <h1>Safe<span>Pets</span></h1>
    
    </header>
    
    <div>
        <h1></h1>
        <Link to="./Service">Servicio</Link>
        
      </div>
      </div>
  );
}


export default Home