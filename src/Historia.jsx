import { Link } from "react-router-dom";
import './Style/style.css';
import mascotas from './img/mascotas.jpg'

function Historia() {
    return (
        <div>
          {/* */}
          <header>
          <h1>Safe<span>Pets</span></h1>
            </header>


          <div className="secciones-principales">
      <div style={{display: 'flex'}}>
            
            
            <div className='seccion sombra margenHorizontal' style={{width: '80%', height:'70rem', justifyContent: 'center'}}>
              <div className='contenido-gasto'  style={{flexDirection: 'column'}}>
                <h1>Historia</h1>
                <p>SAFEPETS surgió debido al estilo de vida actual y la creciente dependencia de la tecnologia han, el cual han generado un desafio en asegurarnos de que nuestras mascotas reciban la atención necesaria en nuestra ausencia Por ende nos planteamos la necesidad de encontrar soluciones innovadoras que combinen tecnologia y cuidado animal para garantizar que nuestras queridas mascotas estén bien atendidas</p>
              </div>
              <div>
              <img src={mascotas} alt="imagen de comentarios" style={{height: '60rem'}}/>

              </div>
              
            </div>
            
  </div>
        </div>
        </div>
    );
  }
  
  
  export default Historia