const heroes = {
    capi:{
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },iron:{
        nombre: 'Iron Man',
        poder: 'Tener una absurda cantidad de dinero'
    },spider:{
        nombre: 'SpiderMan',
        poder: 'La mejor reaccion alergica a las picaduras de araña'
    }
}


export const buscarHeroe = ( id ) => {
    const heroe = heroes[id];
    return new Promise( ( resolve, reject )=>{
        if ( heroe ) {
            setTimeout(() => {
                resolve( heroe );
            }, 1000);
        } else {
            reject(`There isn't existe a hero with id ${ id }`);
        }
    });
}

export const buscarHeroeAsync = async( id ) => {
    const heroe = heroes[id];
    if ( heroe ) {
        return heroe;        
    } else {
        throw `There isn't existe a hero with id ${ id }`
        // throw Error
    }
}


export const slowPromise = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Slow Promise'), 2000);
});

export const regularPromise = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Regular Promise'), 1500);
});
export const fastPromise = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Fast Promise'), 1000);
});