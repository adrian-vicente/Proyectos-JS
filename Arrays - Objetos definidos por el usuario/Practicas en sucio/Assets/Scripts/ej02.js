// Ejercicio 2
let curso = prompt("Introduce el nombre del curso: ");
let p1 = document.getElementById("mostrarAsignaturas");

// Ejecutar la función correspondiente: 

mostrarCurso(curso);

// Declaración de la función: 

function mostrarCurso(curso) {
    
    // Declaración de variables: 

    let primeroDAM = ["BD", "FOL", "PRO", "LM", "SINF"];
    let segundoDAM = ["ISO", "PAR", "FHR", "GBD", "LM"];
    let segundoDAW = ["DWEC", "DWES", "EIE", "DAP", "DIW"];
    let primeroSMR = ["ASO", "SR", "IAE", "SGBD", "SAD"];
    
    // SWITCH

    switch(curso) {

        case "1DAM":
            p1.innerText = primeroDAM;
            break;

        case "2DAM":
            p1.innerText = segundoDAM;
            break;

        case "2DAW":
            p1.innerText = segundoDAW;
            break;

        case "1SMR":
            p1.innerText = primeroSMR;
            break;

        default:
            p1.innerText = `No existe el curso indicado...`;
            break;

    }; // switch

}; // mostrarCurso()