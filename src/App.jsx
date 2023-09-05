import { useState } from 'react'
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

  const handleNuevoServicio = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  const guardarServicio = servicio => {
    servicio.id = generarId()
    servicio.fecha = Date.now()
    setServicios([...servicios, servicio])

    setAnimarModal(false)

    setTimeout(() => {
        setModal(false)
    }, 500);
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
              />}
    </div>
  
  )
}

export default App
