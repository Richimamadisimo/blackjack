import { crearCarta, pedirCarta, valorCarta } from './';
/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array<String>} deck 
 * @param {HTMLElement} puntosHTML 
 */
// turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosHTML, deck, divCartasComputadora  ) => {

    let puntosComputadora = 0;
 
    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCarta( carta );
        
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}