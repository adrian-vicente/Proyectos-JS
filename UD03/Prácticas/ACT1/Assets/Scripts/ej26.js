/*

- UNIDAD: 03
- Autor: Adrián Vicente Vera
- Curso: 2ºCFGS Desarrollo de Aplicaciones Web Semipresencial
- Actividad 1 - Ejercicio 26

Crear una variable con la cadena “Centro de Estudios IES el Grao”. Encontrar la posición de
la palabra “Estudios” dentro de la cadena. Encontrar la última posición del carácter “a”
dentro de la cadena. 

*/

// Declaración de variables: 

let cadena = "Centro de Estudios IES el Grao";
let posicionEstudios = null, ultimaPosicionA = null;

// Obtención de posiciones: 

let cadenaMinusculas = cadena.toLowerCase();
posicionEstudios = cadenaMinusculas.indexOf("estudios");
ultimaPosicionA = cadenaMinusculas.lastIndexOf("a");

// Imprimir las posiciones: 

alert("Posición estudios: " + posicionEstudios + ", posición a: " + ultimaPosicionA);