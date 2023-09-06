import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ListadoServicios from './components/ListadoServicios'
import { generarId } from './helpers'
import IconoNuevoServicio from './img/nuevo-gasto.svg'
import ControlServicios from './components/ControlServicios'

function App() {

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [servicios, setServicios] = useState([])

  const [servicioEditar, setServicioEditar] = useState({})

  useEffect(() => {
    if(Object.keys(servicioEditar).length > 0) {
      setModal(true)
  
      setTimeout(() => {
        setAnimarModal(true)
      }, 500);
    }
  }, [servicioEditar])

  const handleNuevoServicio = () => {
    setModal(true)
    setServicioEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  const guardarServicio = servicio => {
    console.log(servicios.length + 1) // contar los servicios
    if(servicio.id) {
      // Actualizar
      const serviciosActualizados = servicios.map( servicioState => servicioState.id ===
        servicio.id ? servicio : servicioState)
        setServicios(serviciosActualizados)
        setServicioEditar({})
    } else {
      // Nuevo Gasto
      servicio.id = generarId()
      servicio.fecha = Date.now()
      setServicios([...servicios, servicio])
    }
    setAnimarModal(false)
    setTimeout(() => {
        setModal(false)
    }, 500);
  }

  const eliminarServicio = id => {
    const serviciosActualizados = servicios.filter( servicio => servicio.id !== id)
    setServicios(serviciosActualizados)
  }

  return (

    <div className={modal ? 'fijar' : ''}>
    <Header 
    servicios = {servicios}
    />
    
    <>
    <main>
      <ListadoServicios 
      servicios = {servicios}
      setServicioEditar = {setServicioEditar}
      eliminarServicio = {eliminarServicio}
      />
    </main>
    <div className='nuevo-gasto'>
      <img 
      src={IconoNuevoServicio} 
      alt="imagen nuevo servicio" 
      onClick={handleNuevoServicio}
      />
    </div>
    </>
  

    {modal && <Modal 
              setModal = {setModal}
              animarModal = {animarModal}
              setAnimarModal = {setAnimarModal}
              guardarServicio = {guardarServicio}
              servicioEditar = {servicioEditar}
              setServicioEditar = {setServicioEditar}
              />}
    </div>
  
  )
}

export default App
