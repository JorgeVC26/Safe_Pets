import { Link } from "react-router-dom";
import './Style/style.css';
import Usuarios from './img/Users.png'
import Resena from './img/resenas.png'
import Servicios from './img/servicios.png'
import Historia from './img/historia.png'


function Home() {
  return (
      <div>
        {/* */}
        <header>
    
        <h1>Safe<span>Pets</span></h1>
    
        </header>
        <div className="secciones-principales">
    <div style={{display: 'flex'}}>
          <div className='seccion sombra margenHorizontal' style={{width: '20%', height:'40rem', justifyContent: 'center'}}>
            <div className='contenido-gasto' style={{flexDirection: 'column'}}>
              <Link to="./Service" className='Titulos contenido-URL' >Servicios
              
              <img src={Servicios} alt="imagen de servicios" />

              </Link>
            </div>
          </div>
          <div className='seccion sombra margenHorizontal' style={{width: '20%', height:'40rem', justifyContent: 'center'}}>
            <div className='contenido-gasto' style={{flexDirection: 'column'}} >
              <Link to="./Service" className='Titulos contenido-URL'>Usuarios
              
              <img src={Usuarios} alt="imagen de usuarios" style={{height: '100px'}}/>
              </Link>
            </div>
          </div>
          <div className='seccion sombra margenHorizontal' style={{width: '20%', height:'40rem', justifyContent: 'center'}}>
            <div className='contenido-gasto'  style={{flexDirection: 'column'}}>
              <Link to="./Informacion" className='Titulos contenido-URL'>Información
              
              <img src={Resena} alt="imagen de comentarios" />

              </Link>
            </div>
            
          </div>
          <div className='seccion sombra margenHorizontal' style={{width: '20%', height:'40rem', justifyContent: 'center',}}>
            <div className='contenido-gasto'  style={{flexDirection: 'column'}}>
              <Link to="./Historia" className='Titulos contenido-URL'>Historia
              
              <img src={Historia} alt="imagen de comentarios" />

              </Link>
            </div>
            
          </div>
</div>
      </div>
      </div>
  );
}


export default Home