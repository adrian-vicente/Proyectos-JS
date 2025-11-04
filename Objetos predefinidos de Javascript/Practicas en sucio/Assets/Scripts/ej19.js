/*

- UNIDAD: 03
- Autor: Adrián Vicente Vera
- Curso: 2ºCFGS Desarrollo de Aplicaciones Web Semipresencial
- Actividad 1 - Ejercicio 19

Generar una letra aleatoria entre a A y la Z. La letra A tiene el código 65. String.fromCharCode.

*/

// Declaración de variables

/* Le pedí a chat gpt que me diese la lista separada por comas de los números de cada letra del abecedario en UNICODE */

const LETRAS_UNICODE = [97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122];

// Generar un número aleatorio que representará la posición de un valor en el array que hará referencia a una letra en el momento de la conversión: 

let letra_aleatoria = Math.floor(Math.random() * LETRAS_UNICODE.length);

// Mediante la ocnversión de string.fromCharCode usar la posición generada

alert("Letra generada: " + String.fromCharCode(LETRAS_UNICODE[letra_aleatoria]));
