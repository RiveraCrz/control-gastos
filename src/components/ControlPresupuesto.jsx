import {useState,useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({gastos, setGastos, presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect( () => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = totalGastado === 0 ? presupuesto : presupuesto - totalGastado;
        const nuevoPorcentaje = (((presupuesto - totalDisponible) /presupuesto) * 100).toFixed(2);
        
        setDisponible(totalDisponible);
        setGastado(totalGastado);
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        },1000)
     }, [gastos])

    const formatQty = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () => {
        const resultado = confirm('¿Deseas eliminar el presupuesto y los gastos?');

        if(resultado){
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
                value={porcentaje}

                text={`${porcentaje}% Gastado`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                backgroundColor: porcentaje > 100 ? "#CF3636": "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
                })}
            />
        </div>
        <div className='contenido-presupuesto'>
            <button className='reset-app' type='button' onClick={handleResetApp}>
                Limpiar Formulario
            </button>
            <p>
                <span>
                    Presupuesto: 
                </span> {formatQty(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                <span>
                    Disponible: 
                </span> {formatQty(disponible)}
            </p>
            <p>
                <span>
                    Gastada: 
                </span> {formatQty(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto