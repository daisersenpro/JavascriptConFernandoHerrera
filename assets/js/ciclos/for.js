console.log("Hola Mundo desde JS");

const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquaman"];
console.warn("For tradicional");
//ciclo for tiene tres partes: inicialización, condición e incrementador ;; dentro de los ()
for (let i = 0; i < heroes.length ;i++ ){
    console.log(heroes[i]);

}

console.warn("For in");
//for in recorre los indices de un arreglo
for (let i in heroes){
    console.log(heroes[i]);
}
console.warn("For of");
//for of recorre los valores de un arreglo
for (let heroe of heroes){
    console.log(heroe);
}
console.warn("For each");
//for each recorre los valores de un arreglo
heroes.forEach((heroe) => {
    console.log(heroe);
});
