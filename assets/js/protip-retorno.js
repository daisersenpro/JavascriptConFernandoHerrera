// function crearPersona(nombre, apellido) {
//     return {
//         nombre: nombre,
//         apellido: apellido
//     }
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Fernando', 'Herrera');
console.log(persona);

function imprimeArgumentos() {
    console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => {
    //console.log({edad, args});
    return args;
}

imprimeArgumentos(40, 'Fernando', 'Herrera',  true, 'Paris');

const [nombre, apellido, casado, ciudad] = imprimeArgumentos2(40, 'Fernando', 'Herrera',  true, 'Paris');
console.log({nombre, apellido, casado, ciudad});

const { apellido: muevoApellido } = crearPersona('Fernando', 'Herrera');
console.log({muevoApellido});

const tony = {
    nombre: 'Tony',
    apellido: 'Stark',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = (personaje) => {
//     console.log( personaje.nombre);
//     console.log(personaje.apellido);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
//     console.log(personaje.trajes);
// }

const imprimePropiedades = ({ nombre, apellido, vivo, edad=15, trajes }) => {
    
   console.log({ nombre });
   console.log({ apellido });
   console.log({ vivo });
   console.log({ edad });
   console.log({ trajes });
}
imprimePropiedades(tony);