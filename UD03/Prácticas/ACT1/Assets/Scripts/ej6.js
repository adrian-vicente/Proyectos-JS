/*

- UNIDAD: 03
- Autor: Adrián Vicente Vera
- Curso: 2ºCFGS Desarrollo de Aplicaciones Web Semipresencial
- Actividad 1 - Ejercicio 6

Crear un reloj que muestre la hora actualizándose por pantalla y podamos parar con un botón.

*/

// Declaración de variables

let continuar = true;
let fecha6 = null;
let diaMes6 = null, mes6 = null, anyo6 = null;

// Declaración de funciones: 

function reloj() {
    
    // Recogida de información de la fecha: 

    fecha6 = new Date();
    diaMes6 = fecha6.getDate();
    mes6 = fecha6.getMonth() + 1;
    anyo6 = fecha6.getFullYear();

    // Mostrar el reloj por pantalla: 

    let parrafo = document.getElementById("reloj");
    parrafo.innerText = fecha6;

};

// Declaración de intervalo: 

let intervaloReloj = setInterval(reloj, 1000);

// Declaramos la función que parará el reloj: 
// También se podría haber puesto directamente el clearInterval() en el onclick

function pararReloj() {
    clearInterval(intervaloReloj);
};

