/*

- UNIDAD: 03
- Autor: Adrián Vicente Vera
- Curso: 2ºCFGS Desarrollo de Aplicaciones Web Semipresencial
- Actividad 1 - Ejercicio 13

Simular la extracción de una ficha de dominó. 

*/

// Declaración de variables: 

let numero1 = 0;
let numero2 = 0;
let resultadoTirada = "";
let minimo = 1, maximo = 6;


// Generar la extracción: 

numero1 = Math.floor(Math.random() * (maximo - minimo) + minimo);
numero2 = Math.floor(Math.random() * (maximo - minimo) + minimo);
resultadoTirada = numero1.toString() + " - " + numero2.toString();

// Imprimir los resultados

alert("Tirada: " + resultadoTirada);