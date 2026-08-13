function saludar(){
    console.log("Hola mundo");// funcion declarada
}


const saludar2 = function(){
    console.log("Hola mundo 2"); // funcion anonima
}

function saludar3(nombre){
    console.log('Hola '+ nombre); // funcion con parametros
}

const saludar4 = function(nombre){
    console.log(arguments); // funcion con parametros y constante
    console.log('Hola '+ nombre); // funcion con parametros y constante
}

const saludarFlecha = (nombre) => {
    console.log('Hola Flecha'); // funcion flecha
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre); // funcion flecha con parametros
}

saludar();//imprime funcion declarada
saludar2();//imprime funcion anonima
saludar3('Fernando Herrera');//imprime funcion con parametros
saludar4('Fernando Herrera 4', 40, true, 'Paris');//imprime funcion con parametros y constante
saludarFlecha();//imprime funcion flecha
saludarFlecha2('Hola desde Flecha 2');//imprime funcion flecha con parametros