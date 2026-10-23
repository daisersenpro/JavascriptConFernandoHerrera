function saludar(){
    console.log("Hola mundo");// funcion declarada
    return [1,2,3,4,5];

    console.log("Soy un codigo que esta ");// funcion declarada
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

const retornoSaludar = saludar();//retorno de funcion declarada
console.log(retornoSaludar);//imprime retorno de funcion declarada

/* saludar();//imprime funcion declarada
saludar2();//imprime funcion anonima
saludar3('Fernando Herrera');//imprime funcion con parametros
saludar4('Fernando Herrera 4', 40, true, 'Paris');//imprime funcion con parametros y constante
saludarFlecha();//imprime funcion flecha
saludarFlecha2('Hola desde Flecha 2');//imprime funcion flecha con parametros */

function sumar(a,b){ //funcion declarada con parametros y retorno
    return a + b;
}

const sumar2 = (a,b) => a + b; //funcion flecha con parametros y retorno

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random(); //funcion flecha con retorno alternativo sin llaves

//imprime funcion sumar2 con parametros y retorno
console.log(sumar2(10,20));//imprime funcion sumar2 con parametros y retorno

console.log(sumar(10,20));//imprime funcion sumar con parametros y retorno

console.log(getAleatorio());//imprime funcion getAleatorio con retorno

console.log(getAleatorio2());//imprime funcion getAleatorio2 con retorno