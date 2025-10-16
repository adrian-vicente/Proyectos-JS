/*

- UNIDAD: 03
- Autor: Adrián Vicente Vera
- Curso: 2ºCFGS Desarrollo de Aplicaciones Web Semipresencial
- Actividad 1 - Ejercicio 34

*/  

// Declaración de variables: 

let nombreNavegador = navigator.userAgent;
let parrafo = document.getElementById("ej34_p");

// Comprobaciones: 

if(nombreNavegador.includes("Chrome")) {
    parrafo.innerText = "Google Chrome es uno de los principales navegadores. El más jovel y el más popular actualmente."

} else if (nombreNavegador.includes("Firefox")) {
    parrafo.innerText = "Mozilla Firefox, o simplemente Firefox es un navegador web libre y de código abierto desarrollado por Mozilla, una comunidad global que trabaja junta para mantener una Web Abierta, pública y accesible ";

} else if (nombreNavegador.includes("Safari")) {
    parrafo.innerText = "Es el complemento indispensable para los usuarios de Mac OS X, para donde fue ideado inicialmente que iba a ejecutarse y donde están la gran mayoría de usuarios que lo utilizan dentro de alrededor del 4% de usuarios en el mundo. ";

} else if (nombreNavegador.includes("Opera")) {
    parrafo.innerText = "Es reconocido por su velocidad, seguridad, soporte de estándares (especialmente CSS), tamaño reducido y constante innovación. "

} else if (nombreNavegador.includes("Trident")) {
    parrafo.innerText = "Microsoft Edge es un navegador web desarrollado por Microsoft, que se encuentra incluido en Windows 11, reemplazando a Internet Explorer como navegador web preestablecido. Microsoft Edge está construido en torno a los estándares web, y Microsoft se ha comprometido a actualizar Edge para integrarlo con los nuevos y existentes estándares que aún no soporta.."

} else if (nombreNavegador.includes("MSIE")) {
    parrafo.innerText = "Microsoft Edge es un navegador web desarrollado por Microsoft, que se encuentra incluido en Windows 11, reemplazando a Internet Explorer como navegador web preestablecido. Microsoft Edge está construido en torno a los estándares web, y Microsoft se ha comprometido a actualizar Edge para integrarlo con los nuevos y existentes estándares que aún no soporta.."

} else if (nombreNavegador.includes("Edge")) {
    parrafo.innerText = "Microsoft Edge es un navegador web desarrollado por Microsoft, que se encuentra incluido en Windows 11, reemplazando a Internet Explorer como navegador web preestablecido. Microsoft Edge está construido en torno a los estándares web, y Microsoft se ha comprometido a actualizar Edge para integrarlo con los nuevos y existentes estándares que aún no soporta.."

};