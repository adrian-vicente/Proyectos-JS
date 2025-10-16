
// Declaración de variables: 

let header = document.getElementById("header");

// Creación del div para la zona del dibujo: 

let div = document.createElement("div");
div.id = "zonadibujo";
header.insertAdjacentElement("afterend", div);

// Alinear el contenido en la parte central del documento: 

div.style.display = "flex";
div.style.alignItems = "center";
div.style.justifyContent = "center";

// Creación de elemento tabla: 

let tabla = document.createElement("table");
tabla.id = "zonadibujo--tabla";

// Creación de filas y columnas: 

let numerofilas = 30;
let numeroColumnas = 30;

// Generar el interior de la tabla: 

for(let i = 0; i < numerofilas; i++) {

    // Crear elemento table row:

    let tableRow = document.createElement("tr");
    tableRow.id = "zonadibujo--tabla__tr"+(i+1);

    // Estilos: 

    tableRow.style.padding = "10px";
    tableRow.style.border = "2px solid black";

    // Generar número de columnas: 

    for(let o = 0; o < numeroColumnas; o++) {

        // Crear elemento table data: 

        let tableData = document.createElement("td");
        tableData.id = "zonadibujo--tabla__td"+(o+1);
        
        // Añadir estilos

        tableData.style.padding = "1rem";
        tableData.style.border = "2px solid black";

            // Color aleatorio: 

            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);

            tableData.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        // Añadir a la table row el table data generado

        tableRow.appendChild(tableData);

    }; // for o

    // Añadir a la tabla el table row: 

    tabla.appendChild(tableRow);

}; // for i

// Añadir estilos a la tabla: 

tabla.style.border = "2px solid black";

// Añadir la tabla con el interior generado al contenedor padre

div.appendChild(tabla);