let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono Trigger'];
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({primero, ultimo});

juegos.forEach((elemento, odanabab, arr,) => {
    console.log({elemento, odanabab, arr});
});

let nuevosJuegos = juegos.push('Final Fantasy'); //agrega un elemento al final del arreglo y devuelve el nuevo largo del arreglo
console.log({nuevosJuegos, juegos});

nuevosJuegos = juegos.unshift('Pokémon');//agrega un elemento al inicio del arreglo y devuelve el nuevo largo del arreglo
console.log({nuevosJuegos, juegos});

let juegoEliminado = juegos.pop();//elimina el ultimo elemento del arreglo y devuelve el elemento eliminado
console.log({juegoEliminado,juegos});

let posicion = 1;

console.log(juegos);
let juegoBorrado = juegos.splice(posicion, 2);//elimina el elemento en la posicion indicada y devuelve el elemento eliminado
console.log({juegoBorrado, juegos});

console.log(juegos);
let metroidIndex = juegos.indexOf('Metroid');//busca el elemento en el arreglo y devuelve la posicion del elemento si trae -1 es que no lo encontro
console.log({metroidIndex});