// Recoger datos del enunciado: 

let nombre = prompt("Introduce tu nombre");
let apellidos = prompt("Introduce tus apellidos");
let fechaNacimiento = prompt("Introduce tu fecha de nacimiento (dd/mm/aaaa)");
let direccion = prompt("Introduce tu dirección (Calle .... nº .. PTA ...");
let poblacion = prompt("Introduce la población: (CODIGO POSTAL - POBLACION): ");
let idiomas = prompt("Introduce los idiomas que hablas (Separados por guión): ");
let hijos = prompt("Introduce el nombre de los hijos separado por guión: ");

// Mostrar la información: 

// Nombre:, 

let pNombre = document.getElementById("tabla--tr__nombre");
pNombre.innerText = apellidos + ", " + nombre.toUpperCase();

// Edad

let pEdad = document.getElementById("tabla--tr__edad");
let anyoNacimiento = parseInt(fechaNacimiento.substring(fechaNacimiento.length - 4));
pEdad.innerText = calcularEdad(anyoNacimiento) + " años";

// Número de calle:

let pCalle = document.getElementById("tabla--tr__calle");
let calle = direccion.substring(direccion.indexOf('Calle') + 5, direccion.indexOf('nº'));
pCalle.innerText = calle;

// Número de patio:

let pPatio = document.getElementById("tabla--tr__patio");
let numeroPatio = direccion.substring(direccion.indexOf('º') + 1, direccion.lastIndexOf('PTA'));
pPatio.innerText = numeroPatio;

// Número de puerta:

let pPuerta = document.getElementById("tabla--tr_puerta");
let numeroPuerta = direccion.substring(direccion.indexOf('PTA') + 3);
pPuerta.innerText = numeroPuerta;

// Código postal:

let pCodigoPostal = document.getElementById("tabla--tr_codigoPostal");
let codigoPostal = poblacion.substring(0, poblacion.lastIndexOf('-'));
pCodigoPostal.innerText = codigoPostal;

// Población

let pPoblacion = document.getElementById("tabla--tr_poblacion");
let nombrePoblacion = poblacion.substring(poblacion.lastIndexOf('-') + 1);
pPoblacion.innerText = nombrePoblacion.toUpperCase();

// Hijos = 

let pHijos = document.getElementById("tabla--tr__numHijos");
let numeroHijos = calcularHijos(hijos);
pHijos.innerText = numeroHijos + " hijos";

// Idiomas: 

mostrarIdiomas(idiomas);

// Métodos personalizados: 

function calcularEdad(anyo) {
    let fechaActual = new Date();
    let anyoActual = fechaActual.getFullYear();
    return anyoActual - anyo;

}; // calcularEdad()

function calcularHijos(cadenaHijos) {
    cadenaHijos = cadenaHijos.split('-');
    let contador = 0;
    for(let i = 0; i < cadenaHijos.length; i++) {
        contador++;

    }; // for

    return contador;

}; // calcularHijos()

function mostrarIdiomas(idiomas) {
    idiomas = idiomas.split("-");
    let trIdiomas = document.getElementById("tabla--tr__idiomas");
    let tdIdiomas = document.getElementById("tabla--td_idiomas");
    if(idiomas.length > 1) {
        for(let i = 0; i < idiomas.length; i++) {
            let nuevaTableRow = document.createElement("tr");
            nuevaTableRow.id = "tabla--tr__idiomas"+(i+1);
            nuevaTableRow.innerHTML = `
                <td></td>
                <td>${idiomas[i]}</td>
            `;
            trIdiomas.insertAdjacentElement("afterend", nuevaTableRow);
        }; // for
    

    } else tdIdiomas.innerText = idiomas;

}; 