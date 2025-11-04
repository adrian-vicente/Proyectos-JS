
// Declaración de variables: 

// Proceso para cambiar el color de fondo al cambiar el tamaño de la ventana: 

window.addEventListener("resize", cambiarColor);

function cambiarColor() {
    document.body.style.backgroundColor = `rgb(${generarValor()}, ${generarValor()}, ${generarValor()})`;
};

function generarValor() {
    return Math.floor(Math.random() * 256);
}; 