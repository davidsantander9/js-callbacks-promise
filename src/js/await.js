import { buscarHeroe, buscarHeroeAsync } from "./promise";

const heroesIds = [ 'capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map( buscarHeroe );

// export const obtenerHeroesArr = async() => {
//     const heroesArr = [];

//     // for (const id of heroesIds) {
//     //     const heroe = await buscarHeroe( id );
//     //     heroesArr.push(heroe);
//     // }

//     for (const id of heroesIds) {
//         heroesArr.push( buscarHeroe(id) );
//     }

//     return await Promise.all(heroesArr);
// }

export const obtenerHeroesArr = async() => {
    return await Promise.all( heroesIds.map( buscarHeroe ) );
}

export const obtenerHereoAwait = async(id) => {

    try {
        const heroe = await buscarHeroeAsync( id );
        return heroe;
    } catch (error) {
        console.log('Catch!!');
        console.log(error);
        return {
            name: 'Sin nombre',
            poder: 'Sin poder'
        }
    }
    
}

export const heroeCiclo = async() => {
    console.time('HeroeCiclo');

    // const heroes = await Promise.all( heroesPromesas );
    // heroes.forEach( heroe => console.log( heroe ) );

    
    // heroesPromesas.forEach( async(p) => console.log( await p) );
    
    for await(const heroe of heroesPromesas) {
        console.log(heroe);
    }

    console.timeEnd('HeroeCiclo');
}

export const heroeIfAwait = async(id) => {
    if ( (await buscarHeroeAsync).nombre === 'Ironman' ) {
        console.log('Es el mejor de todos')
    } else {
        console.log('Naa')
    }
}