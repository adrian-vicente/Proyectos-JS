/*
let edadAlumno = 0; 
let alturaAlumno = 0;
let contadorAlumnos = 0;
let contadorMayoresEdad = 0
let contadorMayorEstatura = 0;
let sumaEdades = 0; 
let sumaAlturas = 0;
const TOTAL_ALUMNOS = 5;

// Recogida de datos: 

for(let i = 0; i < TOTAL_ALUMNOS; i++) {
    
    // Recogida de datos: 
    
    edadAlumno = parseInt(prompt("Introduce la edad del alumno"));
    alturaAlumno = parseFloat(prompt("Introduce la altura del alumno."));

    // Acumuluamos los valores

    sumaEdades = edadAlumno + sumaEdades;
    sumaAlturas = alturaAlumno + sumaAlturas;

    // Comprobaciones sobre los datos introducidos:

    if(edadAlumno >= 18) contadorMayoresEdad++;
    if(alturaAlumno > 1.75) contadorMayorEstatura++;
    contadorAlumnos++;

    // Contar el números de alumnos

    contadorAlumnos++;

};

// Calcular la edad y altura media:

let edadMedia = sumaEdades / contadorAlumnos;
let estaturaMedia = sumaAlturas / contadorAlumnos;

// Imprimir los resultados: 

alert("La edad media es de: " + edadMedia);
alert("La altura media es: " + estaturaMedia);
alert("Alumnos mayores de 18 años: " + contadorMayoresEdad);
alert("Alumnos mayores de 1.75cm: " + contadorMayorEstatura);
*/