import { useState, useEffect } from "react"

const ControlServicios = (servicios) => {

  const [servicio, setServicio] = useState(0)

  useEffect(() => {
  }, [servicios])

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
