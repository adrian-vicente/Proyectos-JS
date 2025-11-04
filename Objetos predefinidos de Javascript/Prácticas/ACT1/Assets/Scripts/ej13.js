/*

- UNIDAD: 03
- Autor: Adrián Vicente Vera
- Curso: 2ºCFGS Desarrollo de Aplicaciones Web Semipresencial
- Actividad 1 - Ejercicio 13

Introducir un valor con decimales y redondear al entero superior.  

*/

// Declaración de variables: 

let numeroUsuario = parseFloat(prompt("Introduce un valor"));

// Redondear el número al entero superior: 

numeroUsuario = Math.ceil(numeroUsuario);

// Mostrar el resultado redondeado: 

alert("Número redondeado al entero superior: " + numeroUsuario);