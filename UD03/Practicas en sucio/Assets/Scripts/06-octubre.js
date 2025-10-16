
// Crear y unir elementos en el body: 

let parrafo = document.createElement("p");
let contenido = document.createTextNode("Esto es una prueba de texto    ");
parrafo.appendChild(contenido);
document.body.appendChild(parrafo);

let max = 10; 
let min = 1; 
let numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);