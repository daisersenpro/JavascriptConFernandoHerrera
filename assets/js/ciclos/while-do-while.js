console.log("Hello World"); // This is a comment

const carros = ["BMW", "Mercedes Benz", "Volvo"];

let i = 0;

console.warn("While");

/* while (i < carros.length) {
    console.log(carros[i]); // imprime BMW, Mercedes Benz y Volvo
    i++;
} */

while (carros[i]) {
    if (i === 1) {
        //break;
        i++;
        continue;

    }
    console.log(carros[i]); // imprime BMW y Volvo porque cuando i es igual a 1, se salta la iteración y no imprime Mercedes Benz
    i++;
}

console.warn("Do While");
let j = 0;
do{
    console.log(carros[j]); // imprime BMW, Mercedes Benz y Volvo
    j++;

}while(carros[j]);
