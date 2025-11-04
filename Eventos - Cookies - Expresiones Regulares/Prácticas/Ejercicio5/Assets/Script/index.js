
// Declaración de variables: 

let planetas = [
    {"planeta": "mercurio", "informacion": "Descripción de prueba para el planeta mercurio"},
    {"planeta": "venus", "informacion": "Descripción de prueba para el planeta venus"},
    {"planeta": "tierra", "informacion": "Descripción de prueba para el planeta tierra"},
    {"planeta": "marte", "informacion": "Descripción de prueba para el planeta marte"},
    {"planeta": "jupiter", "informacion": "Descripción de prueba para el planeta jupiter"},
    {"planeta": "saturno", "informacion": "Descripción de prueba para el planeta saturno"},
    {"planeta": "uranus", "informacion": "Descripción de prueba para el planeta uranus"},
    {"planeta": "neptuno", "informacion": "Descripción de prueba para el planeta nepturno"}
];

// Función para mostrar información de los planetas

function mostrarInformacionPlanetas(x, y) {
    
    // Declaración de variables: 

    let planeta = null, index = null, mostrado = false;
    x = parseFloat(x), y = parseFloat(y);
    planeta = document.getElementById("infoPlanetas");

    // Comporbaciones: 
    
    if(x >= 353 && x <= 392) {
        index = planetas.findIndex((elemento) => {
            return elemento.planeta.toLowerCase() === "mercurio";
        });

        planeta.textContent = `Información del planeta: ${planetas[index].planeta}: ${planetas[index].informacion}`;
        index = null;

    } else if(x >= 418 && x <= 488) {
        index = planetas.findIndex((planetaActual) => {
            return planetaActual.planeta.toLowerCase() === "venus";

        });

        planeta.textContent = `Información del planeta: ${planetas[index].planeta}: ${planetas[index].informacion}`;

    } else if (x >= 560 && x <= 632) {
        index = planetas.findIndex((planetaActual) => {
            return planetaActual.planeta.toLowerCase() === "tierra";

        });

        planeta.textContent = `Información del planeta: ${planetas[index].planeta}: ${planetas[index].informacion}`;

    } else if (x >= 664 && x <= 716) {
        index = planetas.findIndex((planetaActual) => {
            return planetaActual.planeta.toLowerCase() === "marte";

        });

        planeta.textContent = `Información del planeta: ${planetas[index].planeta}: ${planetas[index].informacion}`;

    } else if (x >= 730 && x <= 884) {
        index = planetas.findIndex((planetaActual) => {
            return planetaActual.planeta.toLowerCase() === "jupiter";
        });

        planeta.textContent = `Información del planeta: ${planetas[index].planeta}: ${planetas[index].informacion}`;

    } else if (x >= 880 && x <= 990) {
        index = planetas.findIndex((planetaActual) => {
            return planetaActual.planeta.toLowerCase() === "saturno";

        });

        planeta.textContent = `Información del planeta: ${planetas[index].planeta}: ${planetas[index].informacion}`;
    
    } else if (x >= 1092 && x <= 1151) {
        index = planetas.findIndex((planetaActual) => {
            return planetaActual.planeta.toLowerCase() === "neptuno";

        });

        planeta.textContent = `Información del planeta: ${planetas[index].planeta}: ${planetas[index].informacion}`;

    } else if (x >= 995 && x <= 1014) {
        index = planetas.findIndex((planetaActual) => {
            return planetaActual.planeta.toLowerCase() === "uranus";
            
        });

        planeta.textContent = `Información del planeta: ${planetas[index].planeta}: ${planetas[index].informacion}`;
    }

}; // mostrarInformacionPlanetas()

function eliminarInformacion() {
    let p = document.getElementById("infoPlanetas");
    p.textContent = "";

}; // eliminarInformacion()

// Función para obtener las coordenadas: 

function obtenerCoordenas(elemento, event) {
    let x = event.screenX;
    let y = event.screenY;
    let p = document.getElementById("coords");
    p.innerText = `Coordenada X: ${x}, coordenada y: ${y}`;
    mostrarInformacionPlanetas(x, y);

}; // obtenerCoordenadas