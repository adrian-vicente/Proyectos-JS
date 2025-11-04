/*

- UNIDAD: 03
- Autor: Adrián Vicente Vera
- Curso: 2ºCFGS Desarrollo de Aplicaciones Web Semipresencial
- Actividad 1 - Ejercicio 28

Crear una variable con el contenido “Centro de Estudios Superior” y sustituir “Superior” por
“IES el Grao”.  

*/

// Declaración de variables: 

let cadena3 = "Centro de Estudios Superior";
let textoAñadir ="Ies el Grao";

// Modificar cadena: 

cadena3 = cadena3.replace("Superior", textoAñadir);

// Imprimir la nueva cadena: 

alert("Cadena modificada: " + cadena3);
