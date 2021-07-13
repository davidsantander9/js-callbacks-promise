import { obtenerHeroesArr } from './js/await';
// import { buscarHeroe, buscarHeroeAsync, fastPromise, regularPromise, slowPromise } from './js/promise';

import './styles.css';


// slowPromise.then( console.log );
// regularPromise.then( console.log );
// fastPromise.then( console.log );

// Promise.race( [slowPromise, regularPromise, fastPromise] )
// .then( console.log ) // Execute resolve first promise 
// .catch( console.warn ); // Execute reject first promise 

// buscarHeroe( 'capi' )
//     .then( console.log )
//     .catch( console.warn );


// buscarHeroeAsync('iron')
//     .then( console.log )
//     .catch( console.warn );

obtenerHeroesArr()
    .then(console.table)

