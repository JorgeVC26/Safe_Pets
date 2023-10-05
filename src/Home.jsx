import { Link } from "react-router-dom";
import './Style/style.css';


function Home() {
  return (
      <div>
        {/* */}
        <header>
    
        <h1>Safe<span>Pets</span></h1>
    
        </header>
    <div style={{display: 'flex'}}>
          <div className='gasto sombra' style={{width: '30%', height:'40rem', justifyContent: 'center'}}>
            <div className='contenido-gasto'>
              <Link to="./Service" className='Titulos'>Servicios</Link>
              
            

            </div>
          </div>
          <div className='gasto sombra margenHorizontal' style={{width: '30%', height:'40rem', justifyContent: 'center'}}>
            <div className='contenido-gasto'>
              <Link to="./Service" className='Titulos'>Usuarios</Link>
              
            

            </div>
          </div>
          <div className='gasto sombra' style={{width: '30%', height:'40rem', justifyContent: 'center'}}>
            <div className='contenido-gasto'>
              <Link to="./Service" className='Titulos'>Más</Link>
              
            

            </div>
          </div>
</div>
      </div>
  );
}


export default Home