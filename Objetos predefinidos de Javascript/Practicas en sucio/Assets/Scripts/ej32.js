/*

- UNIDAD: 03
- Autor: Adrián Vicente Vera
- Curso: 2ºCFGS Desarrollo de Aplicaciones Web Semipresencial
- Actividad 1 - Ejercicio 32

Crear una variable con el contenido “Centro de Estudios IES el Grao” y devolver la cadena
Inversa

*/

// Declaración de variables:

let cadena6 = "Centro de Estudios IES el Grao"; // GRAO EL IES ESTUDIOS DE CENTRO
let cadenaInversa = "";

// Generar la cadena inversa: 

let palabrasCadena = cadena6.split(" ");

for(let i = palabrasCadena.length - 1; i >= 0; i--) {
    cadenaInversa = cadenaInversa + " " +  palabrasCadena[i];
};

// Imprimir el resultado de la cadena inversa: 

document.writeln("<br>Cadena inversa: " + cadenaInversa);