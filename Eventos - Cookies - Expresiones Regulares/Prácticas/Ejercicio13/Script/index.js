
// Declaración de variables: 

let form = document.getElementById("formularioDinamico");
let labelApellido = null, iApellidos = null, iNombre = null;
let labelEdad = null, iEdad = null;
let reset = null;

let apellidosMostrados = false, edadMostrada = false;

// Función para mostrar el campo apellido: 

iNombre = document.getElementById("formularioDinamico__input--nombre");

function mostrarApellidos() {
    if(!apellidosMostrados) {
        // Crear la etiqueta label: 

        labelApellido = document.createElement("label");
        labelApellido.textContent = `Introduce los apellidos: `;

        // Crear el input para los apellidos: 

        iApellidos = document.createElement("input");
        iApellidos.id = "formularioDinamico__input--apellidos";
        iApellidos.type = "text";

        // Añadir los elementos creados al formulario: 

        form.appendChild(labelApellido);
        form.appendChild(iApellidos);

        // Indicar en la variable que los apellidos han sido mostrados: 

        apellidosMostrados = true;
        
        // Inicio del proceso para mostrar la edad: 

        iApellidos.addEventListener("keydown", mostrarEdad);
        iApellidos.addEventListener("change", mostrarEdad);

    }; // if

}; 

// Función para mostrar el campo edad: 

function mostrarEdad() {
    if(!edadMostrada) {
        // Crear la etiqueta label 

        labelEdad = document.createElement("label");
        labelEdad.textContent = `Introduce la edad: `;

        // Crear el input para la edad: 

        iEdad = document.createElement("input");
        iEdad.id = "forumarioDinamico__input--edad";
        iApellidos.type = "number";

        // Añadir los elementos creaods al formulario: 

        form.appendChild(labelEdad);
        form.appendChild(iEdad);

        // Indicar en la variable que el campo edad ha sido mostrada: 

        edadMostrada = true;

    }; // if

}; // mostrarEdad()

// Función para resetear el formulario: 

form.addEventListener("reset", () => {

    // Eliminar los elementos creados de forma dinámica: 

    labelApellido.remove();
    iApellidos.remove();
    labelEdad.remove();
    iEdad.remove();

    // Reiniciar las variables para mostrar los elementos

    edadMostrada = false;
    apellidosMostrados = false;

});