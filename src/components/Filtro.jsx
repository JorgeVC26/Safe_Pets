import { useState, useEffect } from 'react'

const Filtro = ({filtro, setFiltro}) => {
  return (
    <div className="filtros sombra contenedor">
        <form>
            <div className='campo'>
                <label>Filtrar Servicios</label>
                <select
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                >
                <option value="">-- Seleccione --</option>
                <option value="paseo">Paseo</option>
                <option value="higiene">Higiene y Estética</option>
                <option value="cuido">Cuidado completo</option>
                <option value="restaurante">Restaurante</option>
                </select>
            </div>
        </form>
      
    </div>
  )
}

export default Filtro
