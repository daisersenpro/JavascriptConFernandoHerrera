console.log('Hola desde arreglos!');

//const arr = new Array(10);
//const arr = [];
//console.log(arr);

let videoJuegos = ['Mario', 'Megaman', 'Chrono Trigger'];
console.log({videoJuegos});

console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Hola',
    1 + 2,
    function(){},
    () => {},
    {a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. Light',[
        'Dr. Willy',
        'Woodman',
        'Metalman'
    ] ]
    
    
];
//console.log({arregloCosas});
console.log(arregloCosas[7][4][0]); //trae arregle de arregloCosas y el elemento 3 del arreglo que esta en la posicion 7 y asi sucesivamente.