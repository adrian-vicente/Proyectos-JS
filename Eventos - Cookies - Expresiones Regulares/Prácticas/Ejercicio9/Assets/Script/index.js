
// Declaración de variables: 

let img = document.getElementById("contenedorImagenes--img");

// Comprobar si la ruta tiene o no imágen. Poner la img por defecto en caso de que no exista.

if(img.getAttribute("src").trim() === "") {
    img.setAttribute("src", "Assets/Media/foto-por-defecto.jpg");

} else {
    alert("La imágen tiene multimedia añadida correctamente...");

};