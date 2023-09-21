import React from 'react'
import { useState } from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

  const [mensaje, setMensaje] = useState('');

  const handlePresupuesto = (e)=>{
      e.preventDefault();

      if(!presupuesto || presupuesto < 0){
        setMensaje('Ingresa solo números válidos mayores a cero');

        return
      }
      setMensaje('');
      setIsValidPresupuesto(true);
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form action="" onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label htmlFor="">Definir su presupuesto</label>
                <input 
                type="number" 
                className='nuevo-presupuesto'
                placeholder='Añade tu presupuesto'
                value={presupuesto}
                onChange={e => setPresupuesto(Number(e.target.value))}
                />
                
            </div>
            <input type="submit" value="Añadir"/>

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto