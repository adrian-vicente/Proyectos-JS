/*

- UNIDAD: 03
- Autor: Adrián Vicente Vera
- Curso: 2ºCFGS Desarrollo de Aplicaciones Web Semipresencial
- Actividad 1 - Ejercicio 27

Crear una variable con la cadena “Centro de Estudios IES el Grao”. Extraer de la cadena a
partir de la posición “de” y devolver 11 caracteres. 

*/

// Declaración de variables: 

let cadena2 = "Centro de Estudios IES el Grao";
let caracteresMaximos = 11;
let posicion_de = 0;

// Extraer contenido de la variable: 

cadena2 = cadena2.toLowerCase();
posicion_de = cadena2.indexOf("de");

// Extraer la cadena a partir de la posición de la cadena "de": 

let cadena_extraida = cadena2.substring(posicion_de, cadena2.length);

// Mostrar 11 carácteres: 

if(cadena_extraida.length > 11) {
    alert("Cadena extraida: " + cadena_extraida.substring(0, 11));
} else alert("Cadena extraida: " + cadena_extraida);
