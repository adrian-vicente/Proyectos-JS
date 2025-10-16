
// Prueba de escritura en el documento 

document.write('Hola mundo en Javascript');

// Declaración de variables 

let nombre = 'Adrián';
let edad = 30;
document.write('<br> <br>', 'Nombre: ', nombre, ', edad: ', edad, ' años');

// Asignación de variables: 

let variable1 = 30;
let variable2 = variable1 + 30;

document.write("<br> <br>" + "Variable1: " + variable1 + ", variable2: " + variable2);

// Prueba de ejecución del typeoff

let numero = 13;
document.write("<br> <br>" + "Número: " + numero + ", tipo de dato: " + typeof(numero));

let sinDefinicion;
document.write("<br> <br>" + "Valor de la variable: " + typeof(sinDefinicion));

// Objetos: 

let miObjeto = new Object();
document.write('<br> <br> Tipo de dato para miObjeto: ' + typeof(miObjeto));

// Conversiones entre tipos de datos: 

let _numero = 13;
let _numeroString = _numero.toString();
document.write('<br> <br> Tipo de dato para la variable _numeroString: ' + typeof(_numeroString) + ", con valor: " + _numeroString);

// Prueba de ejecución para una función: 

let sumaNumeros = (numero1, numero2) => {
   return numero1 + numero2;    
}

let resultado = sumaNumeros(10, 10);
document.write("<br> <br>Resultado de la ejecución de sumar dos números 10, 10 es de: " + resultado + ", su tipo de dato es: " + typeof(sumaNumeros));