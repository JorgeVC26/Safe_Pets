import React from 'react'
import Servicio from './Servicio'

const ListadoServicios = ({
  servicios, 
  setServicioEditar, 
  eliminarServicio,
  filtro,
  serviciosFiltrados
}) => {
  return (
    <div className='listado-gastos contenedor'>

      {
        filtro ? (
          <>
          <h2>{serviciosFiltrados.length ? 'Servicios' : 'No hay Servicios en esta categoría'}</h2>
          {serviciosFiltrados.map( servicio => (
            <Servicio 
            key={servicio.id}
            servicio = {servicio}
            setServicioEditar = {setServicioEditar}
            eliminarServicio = {eliminarServicio}
            />
          ))}
          </>
        ) : (
          <>
          <h2>{servicios.length ? 'Servicios' : 'Aún no hay Servicios'}</h2>
          {servicios.map( servicio => (
            <Servicio 
            key={servicio.id}
            servicio = {servicio}
            setServicioEditar = {setServicioEditar}
            eliminarServicio = {eliminarServicio}
            />
          ))}
          </>
        )
      }

    </div>
  )
}
export default ListadoServicios
