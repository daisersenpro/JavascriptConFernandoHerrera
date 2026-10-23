let a = 10;
let b = a; // valor por referencia
a = 30;

console.log({a,b});

let juan = { nombre: 'Juan'};
let ana = { ...juan }; // valor por referencia
ana.nombre = 'Ana';

console.log({juan,ana});

const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter,tony});

//Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice'); //incia timer mide rendimiento de codigo
const otrasFrutas = frutas.slice(); // valor por referencia
console.timeEnd('slice'); // termina timer mide rendimiento de codigo

console.time('spread'); //incia timer mide rendimiento de codigo
const otrasFrutas2 = [...frutas];
console.timeEnd('spread'); // termina timer mide rendimiento de codigo

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});