import React from 'react'
import Servicio from './Servicio'

const ListadoServicios = ({servicios}) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{servicios.length ? 'Servicios' : 'Aún no hay Servicios'}</h2>

      {servicios.map( servicio => (
        <Servicio 
        key={servicio.id}
        servicio = {servicio}
        />
      ))}
    </div>
  )
}
export default ListadoServicios
