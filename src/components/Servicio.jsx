import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
}from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import { formatearFecha } from '../helpers'

import IconoPaseo from '../img/paseo-mascota.png'
import IconoComida from '../img/comida-mascota.png'
import IconoHigiene from '../img/higiene_mascota.png'
import IconoCuido from '../img/cuido_completo.png'

const diccionarioIconos = {
  paseo : IconoPaseo,
  restaurante : IconoComida,
  higiene : IconoHigiene,
  cuido : IconoCuido
}


const Servicio = ({servicio, setServicioEditar,eliminarServicio}) => {
    const {categoria, nombre, precio, ubicacion, id, fecha} = servicio

    const leadingActions = () => (
      <LeadingActions>
        <SwipeAction onClick={() => setServicioEditar(servicio)}>
            Editar
        </SwipeAction>
      </LeadingActions>
      )

    const trailingActions = () => (
      <TrailingActions>
        <SwipeAction 
        onClick={() => eliminarServicio(id)}
        destructive={true}
        >
            Eliminar
        </SwipeAction>
      </TrailingActions>
    )
  return (
    <SwipeableList>
      <SwipeableListItem
       leadingActions = {leadingActions()}
       trailingActions = {trailingActions()}
      >
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        <img 
        src={diccionarioIconos[categoria]} 
        alt="Icono servicio" />
        <div className='descripcion-gasto'>
            <p className='categoria'>{categoria}</p>
            <p className='nombre-gasto'>{nombre}</p>
            <p className='nombre-gasto'>{ubicacion}</p>
            <p className='fecha-gasto'>
              Agregado el: {''}
              <span>{formatearFecha(fecha)}</span>
              </p>
        </div>
      </div>

      <p className='cantidad-gasto'>₡{precio}</p>
    </div>
    </SwipeableListItem>
    </SwipeableList>
  )
}

export default Servicio
