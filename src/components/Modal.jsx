import {useState} from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal, guardarServicio}) => {

    const [mensaje, setMensaje] = useState('')

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [ubicacion, setUbicacion] = useState('')
    const [categoria, setCategoria] = useState('')
    

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if([nombre, precio, ubicacion, categoria].includes('')) {
            setMensaje('Todos los Campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return
        }

        guardarServicio({nombre, precio, ubicacion, categoria})
    }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img 
        src={CerrarBtn} 
        lt="cerrar modal" 
        onClick={ocultarModal}
        />
      </div>
      
      <form 
      onSubmit={handleSubmit}
      className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
        <legend>Nuevo Servicio</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className='campo'>
            <label htmlFor="nombre">Nombre Colaborador</label>

            <input 
            id="nombre"
            type="text"
            placeholder="Añade el nombre del colaborador"
            value={nombre}
            onChange={ e => setNombre(e.target.value)}
            />
        </div>

        <div className='campo'>
            <label htmlFor="precio">Precio</label>

            <input 
            id="precio"
            type="number"
            placeholder="Indica el precio por hora"
            value={precio}
            onChange={ e => setPrecio(Number(e.target.value))}
            />
        </div>

        <div className='campo'>
            <label htmlFor="ubicacion">Ubicación</label>

            <input 
            id="ubicacion"
            type="text"
            placeholder="Añade el cantón donde ofreces el servicio: Ej. Nicoya"
            value={ubicacion}
            onChange={ e => setUbicacion(e.target.value)}
            />
        </div>

        <div className='campo'>
            <label htmlFor="categoria">Tipo de Servicio</label>

            <select 
            name="" 
            id="categoria"
            value={categoria}
            onChange={ e => setCategoria(e.target.value)}
            >
                <option value="">-- Seleccione --</option>
                <option value="paseo">Paseo</option>
                <option value="higiene">Higiene y Estética</option>
                <option value="cuido">Cuidado completo</option>
                <option value="restaurante">Restaurante</option>
            </select>

            <input 
            type="submit"
            value="Agregar Servicio"
            />

           
        </div>
      </form>
    </div>
  )
}

export default Modal
