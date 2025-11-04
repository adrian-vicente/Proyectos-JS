// Ejercicio 4: 

let tipoPermiso = prompt("Introduce el tipo de permiso: ");
let carnet = carnetPermitido(tipoPermiso);
let p = document.getElementById("tipoCarnet");
p.innerText = `Tipo de carnet permitido: ${carnet}`;

// Declaración de funciones: 

function carnetPermitido(carnet) {
    switch(carnet) {

        case "AM":
            return "Licencia de ciclomotor"; 
            break;

        case "A1": 
            return "Motos sin sidecar con una cilindrada máxima de 125cc"
            break;

        case "A2": 
            return "Motocicletas con o sin sidecar";
            break;

        case "A": 
            return "Motocicletas de cualquier cilindrada";
            break;

        case "B": 
            return "Turismos, furgonetas que no superen 3500kg";
            break;

        case "C1": 
            return "Automóviles entre 3500kg y los 7500kg";
            break;

        case "C": 
            return "Superior a los 3500kg y menor de 9 asientos";
            break;

        case "D1": 
            return "Vehículos de más de 9 plazas pero menos de 17.";
            break;

        case "D": 
            return "Automóviles de más de 9 plazas sin límite máximo.";
            break;

        case "BTP": 
            return "Vehículos especiales, taxis, prioritarios y transporte escolar.";
            break;

        default:
            return "Tipo de permiso no válido.";
            break;

    }; // switch

}; // carnetPermitido()