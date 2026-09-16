let a = 9;

if (a > 10) {
    console.log("A es mayor que 10");
} else{
    console.log("A es menor o igual que 10");
}

//console.log("Fin del programa");

const hoy = new Date();
let dia = hoy.getDay();

console.log({dia});

dia = 6;

//Creamos un objeto para mapear los días de la semana
const diasSemana = {
    0: "domingo",
    1: "lunes",
    2: "martes",
    3: "miércoles",
    4: "jueves",
    5: "viernes",
    6: "sábado"
}

console.log(diasSemana[dia] || 'Día no válido') ;

//Creamos un array para mapear los días de la semana
const diasSemana2 = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

console.log(diasSemana2[dia] || 'Día no válido') ;
