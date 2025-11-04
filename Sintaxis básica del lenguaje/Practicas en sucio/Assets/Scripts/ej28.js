/*
// Declaración de variables: 

let contadorNumerosPositivos = 0;
let contadorNumerosNegativos = 0;
let contadorCeros = 0;
let acumuladorNumerosPositivos = 0;
let acumuladorNumerosNegativos = 0;
let numeroUsuario = 0;

// Recogida de datos: 

for(let i = 0; i <= 10; i++) {
    numeroUsuario = parseInt(prompt("Introduce un número: "));
    if(numeroUsuario > 0 ) {
        contadorNumerosPositivos++;
        acumuladorNumerosPositivos = numeroUsuario + acumuladorNumerosPositivos;
    } else if (numeroUsuario < 0) {
        contadorNumerosNegativos++;
        acumuladorNumerosNegativos = numeroUsuario + acumuladorNumerosNegativos;
    } else contadorCeros++;

}; // for

alert("Total de ceros: " + contadorCeros);
alert("Media de números negativos: " + ( acumuladorNumerosNegativos / contadorNumerosNegativos ));
alert("Media de números positivos: " + (acumuladorNumerosPositivos / contadorNumerosPositivos ));
*/