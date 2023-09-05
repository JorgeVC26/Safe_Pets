import React from 'react'
import ControlServicios from './ControlServicios'

const Header = (servicios, servicio) => {
  return (
  <>
    <header>
    
      <h1>Safe<span>Pets</span></h1>
    
        <ControlServicios 
        servicios = {servicios}
        />
    </header>
</>
  )
}

export default Header
