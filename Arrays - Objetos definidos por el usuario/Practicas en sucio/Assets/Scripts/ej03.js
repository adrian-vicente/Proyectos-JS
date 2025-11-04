// Ejercicio 3: 

// Declaración de variables: 

let tipoPiscina = prompt("Introduce el tipo de piscina: ");
let tipos_de_piscina = ["cuadrada", "rectangular", "ovalada", "redonda"];
let p = document.getElementById("metrosCubicosPiscina");

// Comprobaciones: 

if(tipos_de_piscina.includes(tipoPiscina.toLowerCase())) {
    
    // Declaración de variables: 

    let indexPiscina = tipos_de_piscina.indexOf(tipoPiscina);
    let resultado = 0;

    // Recogida de datos: 

    let longitud = parseFloat(prompt("Introduce la longitud: "));
    let anchura = parseFloat(prompt("Introduce la anchura: "));
    let profundidad = parseFloat(prompt("Introduce la profundidad: "));

    // Switch según el tipo de piscina para calcular los m3

    switch(indexPiscina) {

        case 1:
        case 2:
            p.innerText = calcularPiscinaCuadrada(longitud, anchura, profundidad);
            break;

        case 3:
            p.innerText = calcularPiscinaOvalada(longitud, anchura, profundidad);
            break;

        case 4:
            p.innerText = calcularPiscinaRedonda(longitud, anchura, profundidad);
            break;

    }; // switch

    // Devolver el resultado calculado: 

} else {
    p.innerText = `El tipo de piscina indicado no es el correcto.`;

}; // if - else

// Creación de funciones: 

function calcularPiscinaCuadrada(long, anchura, profundidad) {
    return long * anchura * profundidad;

}; // calcularPiscinaCuadrada

function calcularPiscinaOvalada(long, anchura, profundidad) {
    return 0.89 * (long * anchura * profundidad);

}; // calcularPiscinaOvalada

function calcularPiscinaRedonda(long, anchura, profundidad) {
    return 0.79 * Math.sqrt(Math.pow(long, 2) + Math.pow(anchura, 2) + Math.pow(profundidad, 2));

}; // calcularPiscinaRedonda