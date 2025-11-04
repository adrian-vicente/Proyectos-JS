// Función base: 

function cambiarPropiedadesTexto(elemento, event) {
    if(event.button === 1) {
        cambiarColor(elemento);

    } else if (event.button === 0) {
        disminuirTexto(elemento);

    } else if (event.button === 2) {
        aumentarTexto(elemento);

    }; // if - else if - else if

}; // cambiarPropiedadesTexto()

// Función para disminuir el tamapo del texto: 

function disminuirTexto(elemento) {
    elemento.style.fontSize = "smaller";

}; // elemento()

// Función para aumentar el tamaño del texto: 

function aumentarTexto(elemento) {
    elemento.style.fontSize = "larger";

}; // aumentarTexto

// Función para cambiar el color

function cambiarColor(elemento) {
    let r = generarNumeroAleatorio();
    let g = generarNumeroAleatorio();
    let b = generarNumeroAleatorio();
    elemento.style.color = `rgb(${r}, ${g}, ${b})`;

}; // cambiar color

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 256);

}; // generarNumeroAleatorio