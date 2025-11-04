document.write("<br> <br>---------------------------------------- EJERCICIO 12 ----------------------------------------");

const total = 100;
let numerosPares = 0;
for(let a = 0; a <= 100; a++) {
    if((a + 1 ) % 2 === 0 && numerosPares < 5) {
        document.write("<br> <br> Número par encontrado: " + (a+1));
        numerosPares++;
    }
}

document.write("<br> <br>---------------------------------------- EJERCICIO 12 ----------------------------------------");
