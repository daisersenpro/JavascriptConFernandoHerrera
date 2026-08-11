let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coordenadas: {
        lat: 34.0522,
        lng: -118.2437
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultimaPelicula': 'Infinity War' // Se puede usar comillas para propiedades con espacios o caracteres especiales
};

console.log(personaje); // Muestra todo el objeto
console.log('Nombre del personaje:', personaje.nombre); // Muestra el nombre del personaje notacion de punto
console.log('Nombre del personaje:', personaje['nombre']); // Muestra el nombre del personaje notacion de corchetes
console.log('Edad de personaje:', personaje.edad); // Muestra la edad del personaje

console.log('Coordenadas:', personaje.coordenadas); // Muestra las coordenadas del personaje
console.log('Latitud:', personaje.coordenadas.lat); // Muestra la latitud del personaje

console.log('Numero de trajes:', personaje.trajes.length); // Muestra el numero de trajes del personaje
console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length - 1]); // Muestra el ultimo traje del personaje

const x = 'vivo';
console.log('Vivo:', personaje[x]); // Muestra si el personaje esta vivo o no

console.log('Ultima pelicula:', personaje.ultimaPelicula); // Muestra la ultima pelicula del personaje