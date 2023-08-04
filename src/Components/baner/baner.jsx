import './style.js'
import baner from '../imagens/parque.png'
import { StyleBaner } from './style.js'


function Baner (){
    return(
        <StyleBaner>
            <img className='baner' src={baner} alt="foto do parque aquatico olimpia vista de cima" />

        </StyleBaner>
    )
}

export default Baner

