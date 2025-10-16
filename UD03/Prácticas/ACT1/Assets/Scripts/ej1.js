/*

- UNIDAD: 03 
- Autor: Adrián Vicente Vera
- Curso: 2ºCFGS Desarrollo de Aplicaciones Web Semipresencial
- Actividad 1 - Ejercicio 1

*/

// Declarar la fecha 13 de Abril 2004

let fecha = new Date(2004, 4, 13);

// Comprobaciones antes de mostrar fecha: 

let mes = fecha.getMonth() + 1;
let diaMes = fecha.getDate();
let anyo = fecha.getFullYear();

if(mes < 10) {
    mes.toString();
    mes = "0" + mes;
}; 

if(diaMes < 10) {
    diaMes.toString();
    diaMes = "0" + diaMes;

};

// Imprimir la fecha ya convertida: 

document.writeln("Fecha ejercico 1: " + diaMes + "/" + mes + "/" + anyo);

// No hay que tratar mucho con fechas pero se que el més es uno menos va del 0 al 11.