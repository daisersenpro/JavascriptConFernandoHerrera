const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(true); // salida: true
console.log(!true); // salida: false
console.log(!false); // salida: true

console.log(!regresaFalse()); // salida: true x la negacion osea !

console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); // salida: true Operador AND &&
console.log(true && false); // salida: false
console.log(false && true); // salida: false
console.log(false && false); // salida: false
console.log(true && !false); // salida: true

console.log('====================');
console.log(regresaFalse() && regresaTrue()); // salida: false
console.log(regresaTrue() && regresaFalse()); // salida: false

console.log('====&&====');
regresaFalse() && regresaTrue(); // salida: false

console.log('4 condiciones', true && true && true && false); // salida: false

console.warn('OR'); // true si alguno de los valores es verdadero, operador OR ||
console.log(true || true);

console.log(true || false); // salida: true
console.log(false || true); // salida: true

console.log( regresaTrue() || regresaFalse()); // salida: true
console.log( regresaFalse() || regresaTrue()); // salida: true

console.log('4 condiciones', true || true || true || false); // salida: true
