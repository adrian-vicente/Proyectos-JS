// Ejercicio 5: 

// Declaración de variables: 

let p = document.getElementById("multiploArray");
let arrayAleatorio = [];
let numeroAleatorio = 0;

// Generar array de manera aleatoria: 

for(let i = 0; i < 10; i++) {
    numeroAleatorio = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    arrayAleatorio.push(numeroAleatorio);
    console.log(`Número añadido al array: ${numeroAleatorio}`);

}; // for

// Obtener los múltiplos de cinco sobre el array generado aleatoriamnete: 

p.innerText = `Múltiplos de cinco encontrados: ${multiplosCinco(arrayAleatorio)}`;

// Declaración de funciones: 

function multiplosCinco(array) {
    let arrayMultiplos = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 5 == 0) arrayMultiplos.push(array[i]);
        else continue; 

    }; // for

    if(arrayMultiplos == null) return null; 
    else return arrayMultiplos;

}; // multiplosCinco