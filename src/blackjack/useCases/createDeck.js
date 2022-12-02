import _ from 'underscore';

/**
 * 
 * @param {Array<String>} tiposDeCarta 
 * @param {Array<String>} tiposEspeciales 
 * @returns {Array<String>}
 */
 // Esta función crea un nuevo deck
 export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {
    
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}
