import React from 'react'

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import { formatDate } from '../helpers'
//Images
import ImageHome from '../img/icono_casa.svg'
import ImageSaving from '../img/icono_ahorro.svg'
import ImageFoot from '../img/icono_comida.svg'
import ImageExpensive from '../img/icono_gastos.svg'
import ImageOcio from '../img/icono_ocio.svg'
import ImageSalud from '../img/icono_salud.svg'
import ImageSuscriptions from '../img/icono_suscripciones.svg'

const dictionaryIcons = {
  comida: ImageFoot,
  ahorro: ImageSaving,
  casa: ImageHome,
  gastos: ImageExpensive,
  salud: ImageSalud,
  ocio: ImageOcio,
  suscripciones: ImageSuscriptions
}

const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {
  const { categoria, nombre, cantidad, id, fecha } = gasto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
          Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction 
      onClick={() => eliminarGasto(id)}
      destructive ={true} >
          Eliminar
      </SwipeAction>
    </TrailingActions>
  )
    

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        <img 
        src= { dictionaryIcons[categoria] }
        alt="Icons" 
        />

        <div className='descripcion-gasto'>
            <p className='categoria'>{categoria}</p>
            <p className='nombre-gasto'>{nombre}</p>
            <p className='fecha-gasto'>
              Agregado el:  
              <span>
                { formatDate(fecha) }
              </span>
            </p>
        </div>
      </div>
      <p className='cantidad-gasto'>${ cantidad }</p>
    </div>
    </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto