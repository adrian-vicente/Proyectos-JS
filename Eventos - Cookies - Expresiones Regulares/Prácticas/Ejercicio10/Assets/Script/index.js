
// Declaración de variables: 

let div = document.getElementById("contenedor");
let p = document.createElement("p");
let mostrado = false;

// Función para obtener el valor del text area: 

function mostrarInfo(elemento) {

    // Borrar el contenido de la selección anterior: 

    p.textContent = ``;

    // Obtener la subcadena seleccionada del textarea: 

    let inicio = elemento.selectionStart;
    let final  = elemento.selectionEnd; 
    let textoSeleccionado = elemento.value.substring(inicio, final);
    
    // Mostrar la parte seleccionada en el párrafo creado de manera dinámica: 
    
    p.textContent = `Texto seleccionado: ${textoSeleccionado}`;
    div.appendChild(p);

}; // mostrarInfo()