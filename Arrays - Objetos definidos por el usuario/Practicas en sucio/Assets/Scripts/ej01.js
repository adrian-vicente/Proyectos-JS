// Ejercicio 1: 

let sueldo = 2000;
let deduccion = 10;
let comision = 5;
let p = document.getElementById("calcularSueldo");
p.innerText = `Sueldo inicial de: ${sueldo}€, sueldo tras deducciones de: ${calcularSueldo(sueldo, deduccion, comision)}€`;

// Declaración de la función: 

function calcularSueldo(sueldoEmpleado, deducciones, comision) {

    // Declaración de variables: 

    let cantidad_deduccion = sueldoEmpleado * (deducciones / 100);
    let cantidad_comision  = sueldoEmpleado * (comision / 100);

    // Calcular el sueldo del empleado: 

    sueldoEmpleado = sueldoEmpleado - cantidad_comision - cantidad_deduccion;

    // Devolver el valor generado: 

    return sueldoEmpleado;

}; // calcularSueldo()