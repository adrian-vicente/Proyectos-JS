
// Declaración de Arrays: 

/**
 let array_1 = []; // Array nulo
let array_2 = new Array(); // Array sin número de elementos
let array_3 = new Array(10); // Array de rango 10 sin valores

// Declaración de arrays con valores iniciales: 

let a1 = [10, 20, "Adrián", 3.5];
let a2 = new Array(10, 20, 30, 40, "Adrián", "Vicente");

// Añadir valores a un array por posición: 

array_3[0] = 10; 
array_3[1] = "Adrián";
alert("Longitud array 3: " + array_3.length);

// ¿Cómo obtener la longitud de un array?
let long_arr3 = array_3.length;
 */

// Ejemplo de implementación del concat() en los arrays: 

let arr_1 = [], arr_2 = [];
for(let i = 0; i <= 5; i++) {
    arr_1[i] = Math.floor(Math.random() * 21);
    arr_2[i] = Math.floor(Math.random() * 21);

}; // for

let nuevo_arr = arr_1.concat(arr_2);
let p = document.getElementById("id");
p.innerText = `Resultado de juntar los dos arrays: ${nuevo_arr}`;