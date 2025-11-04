/*

- UNIDAD: 03
- Autor: Adrián Vicente Vera
- Curso: 2ºCFGS Desarrollo de Aplicaciones Web Semipresencial
- Actividad 1 - Ejercicio 21

Introducir 5 números positivos por teclado e indicar cual es el máximo. Los negativos los  
debe de ignorar. 

*/

// Declaración de variables: 

let numeroUsuario = 0; 
let numeros = [];
let numeroMaximo = 0;

// Recogida de datos: 

for(let i = 0; i <= 5; i++) {
    numeroUsuario = parseInt(prompt("Introduce un valor"));
    if(numeroUsuario >= 0) {
        numeros.push(numeroUsuario);

    } else 
        continue;

};

// Identificar el valor máximo: 

for(let o = 0; o < numeros.length; o++) {
    if(numeros[o] > numeroMaximo) numeroMaximo = numeros[o];
    else
        continue;
};

// Imprimir el valor máximo: 

alert("El valor máximo introducido es: " + numeroMaximo);
