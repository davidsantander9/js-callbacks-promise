import { buscarHeroe, buscarHeroeAsync } from "./promise";

const heroesIds = [ 'capi', 'iron', 'spider'];

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