/* Dias de semana abre  a las 11,
pero los fines de semana abre a las 9 */


//Entra a un sitio web para ver si esta abierto hoy....

const dia = 0; // 0: domingo, 1: lunes, 2: martes, 3: miercoles, 4: jueves, 5: viernes, 6: sabado

const horaActual = 10; // 24 horas

let horaApertura; // 24 horas
let mensaje; // Mensaje a mostrar: Esta abierto o esta cerrado, hoy abrimos a las XX

//if (dia === 0 || dia === 6){

// if ([0,6].includes(dia)){
//     console.log('Fin de semana');
//     horaApertura = 9;
    
// }else{
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

horaApertura = ([0,6].includes(dia)) ? 9 : 11; // Operador ternario, si la condicion es verdadera asigna el primer valor, si es falsa asigna el segundo valor

// if (horaActual >= horaApertura){
//     mensaje = 'Esta abierto';
// }else{
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`; // Con Backticks podemos interpolar variables dentro de un string con ${variable}
// }

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;// Operador ternario, si la condicion es verdadera asigna el primer valor, si es falsa asigna el segundo valor

console.log({horaApertura, mensaje});