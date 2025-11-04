
// Declaración de la función: 

function cambiarColorFondo(elemento) { 
    let r = generarNumeroAleatorio();
    let g = generarNumeroAleatorio();
    let b = generarNumeroAleatorio();
    elemento.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    

}; // cambiarColorFondo

function cambiarColorFondoBlanco(elemento) {
    elemento.style.backgroundColor = "white";

}; // cambiarColorFondoBlanco

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 255) + 1;

}; // generarNumeroAleatorio()