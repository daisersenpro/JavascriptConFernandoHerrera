function regresaTrue() {
    return true;
}

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola Mundo'; // Salida: 'Hola Mundo' asigna el ultimo valor evaluado

const a2 = 'Hola' && 'Mundo'; // Salida: 'Mundo' asigna el ultimo valor evaluado

const a3 = 'Hola' && 'Mundo' && soyFalse && 'Hola de nuevo'; // Salida: false asigna el primer valor falsy evaluado

const a4 = soyFalse || 'Ya no soy falso'; // Salida: 'Ya no soy falso' asigna el primer valor truthy evaluado - ocupamos OR || 

const a5 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso'; // Salida: 'Ya no soy falso' asigna el primer valor truthy evaluado - ocupamos OR ||

const a6 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso'; // Salida: true asigna el primer valor truthy evaluado - ocupamos OR ||



console.log({ a1, a2, a3, a4 , a5, a6 });

// Nota: Intentar no pasar de mas de 3 evaluaciones en una sola linea, ya que puede ser dificil de leer y entender.