/*

- UNIDAD: 03 
- Autor: Adrián Vicente Vera
- Curso: 2ºCFGS Desarrollo de Aplicaciones Web Semipresencial
- Actividad 1 - Ejercicio 3

Suma 10 años, 4 meses y 5 días a la fecha actual.  

*/

// Declaración de variables: 

let fecha_actual = new Date();

    // Sumar 10 años a la fecha: 

    fecha_actual.setFullYear(fecha_actual.getFullYear() + 10);

    // Sumar 4 meses a la fecha: 

    fecha_actual.setMonth(fecha_actual.getMonth() + 4);

    // Sumar 5 días a la fecha actual: 

    fecha_actual.setDate(fecha_actual.getDate() + 5);

// Imprimir el resultado de la nueva fecha: 

document.writeln("<br>Fecha ejercicio 3: " + fecha_actual);