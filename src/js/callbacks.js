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


export const buscarHeroe = ( id, callback ) => {
    const heroe = heroes[id];
    callback(heroe);
}