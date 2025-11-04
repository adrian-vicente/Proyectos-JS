
// Función para ocultar el contenido: 

function ocultar(elemento, event) {
    let p = document.getElementById(elemento.id);
    let valor_p = p.value;
    p.textContent = " ";

}; // ocultar