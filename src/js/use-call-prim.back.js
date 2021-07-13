import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promise';

const heroeId = 'capi1';
const heroeId2 = 'iron2';
const heroeId3 = 'spider2';
  

// buscarHeroe( heroeId, (err , heroe1 ) => {
//     if ( err ) { return console.error( err ) }

//     buscarHeroe( heroeId2, ( err, heroe2 ) => {
//         if ( err ) { return console.error( err ) } 
//         buscarHeroe( heroeId3, ( err, heroe3 ) => {
//             if ( err ) { return console.error( err ) } 
//             console.log(`Enviando a ${ heroe1.nombre }, ${ heroe2.nombre } y ${ heroe3.nombre }`); 
//         } );
//     } );
    
// });

// buscarHeroe( heroeId ).then( ( heroe ) => {
//     // console.log(`Enviado a la mision: ${ heroe.nombre }`);
//     // console.log(object) 
//     buscarHeroe( heroeId2 ).then( heroe1 => {
//         console.log(`Enviando a ${ heroe.nombre }, ${ heroe1.nombre } `);
//     })
// });


// The code goint to execute until the array has been resolved
// Promise.all([true, 'hola', 123]).then( arr => {
//     console.log('promise.all', arr)
// });

Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId2)])
.then( ([heroe, heroe1]) => {
    console.log(`Enviando a ${ heroe.nombre }, ${ heroe1.nombre } `);
}).catch( err => {
    alert(err);
}).finally( ()=> {
    console.log('Promise finished');
});

console.log('Fin del programa');