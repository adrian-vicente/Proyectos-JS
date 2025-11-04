
// Función para mostrar la información: 

function mostrarInfo(elemento, event) {
    if(event.key === "Enter") {

        // Declaración de variables: 

        let form = document.getElementById("idformulario");
        let input = document.getElementById("texto");
        let valor = input.value;
        let input_mensaje = document.createElement("input");

        // Proceso para crear el input y añadir el contenido escrito: 

        input_mensaje.id = "inputMensaje";
        input_mensaje.readOnly = true;
        input_mensaje.value = valor;
        form.appendChild(input_mensaje);

        // Añadir la etiqueta de codificación al formulario: 

        form.encty

        // Añadir información extra: 

        let p = document.getElementById("informacionExtra");
        let codigoLetra = event.key;
        let codigoASCII = codigoLetra.charCodeAt(0);
        let nuevoCodigo = codigoASCII + 5;
        let nuevoCodigo_txt = String.fromCharCode(nuevoCodigo);
        p.textContent = `Código antiguo: ${codigoLetra}. Nuevo código: ${nuevoCodigo_txt}`;

    };

}; // mostrarInfo()

// Función para crear elemento input texto: 

function crearInput() {
    let i = document.createElement("input");
    i.id = input_informacion;
    i.readOnly;

}; // crearInput()