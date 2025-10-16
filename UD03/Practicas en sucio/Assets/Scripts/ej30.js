/*

- UNIDAD: 03
- Autor: Adrián Vicente Vera
- Curso: 2ºCFGS Desarrollo de Aplicaciones Web Semipresencial
- Actividad 1 - Ejercicio 30

Crear una Cadena con vuestro nombre completo e indicar cuantas palabras contiene. Por
ejemplo: Pedro Ros Molina ----> 3 palabras // Jose Luis Martín Gómez -----> 4 palabras.

*/

// Declaración de variables: 

let cadenaNombre = "Adrián Vicente Vera";
let cantidadPalabras = 0; let palabras;

// Obtener la cantidad de palabras: 

palabras = cadenaNombre.split(" ");
cantidadPalabras = palabras.length;

// Imprimir la cantidad de palabras: 

alert("Cantidad de palabras: " + cantidadPalabras);