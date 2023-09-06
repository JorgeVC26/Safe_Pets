import { useState, useEffect } from "react"

const ControlServicios = (servicios, contar, setContar) => {

  const [servicio, setServicio] = useState(0)

  // NO FUNCIONA
  useEffect((contar) => {
    // Actualiza el estado de 'servicio' o realiza cualquier lógica adicional según 'servicios'
    if(servicio.length > 0) {
    setContar(servicios.length + 1);
    console.log(setContar)
  }
  }, [servicios]);
   // NO FUNCIONA

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <p>Imagen aqui</p>

      <div className="contenido-presupuesto">
        <p> Servicios: <span>{servicio}</span></p>
      </div>
    </div>
  )
}


export default ControlServicios
