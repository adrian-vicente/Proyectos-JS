
// Declaración de variables: 

let div = null, img = null, titulo = null;
let contador = 0;
let textoAnuncios = [
    "Cajas de ordenadores NORTON. Calidad en su máximo esplendor, lleva tu PC al siguiente nivel.",
    "Mazda. La gama de coches japoneses que rompe el mercado con su estándar de calidad."
];

// Procrso para la gestión de anuncios: 

let div_anuncio = document.getElementById("anuncio");
    div_anuncio.style.width = "auto";
    div_anuncio.style.height = "auto";
    div_anuncio.style.border = "2px solid black";

function mostrarAnuncios() {
    
    // Borrar el contenido actual del HTML para evitar que se duplique informacion:
    
    div_anuncio.innerHTML = "";

    // Declaración de variables:

    titulo = document.createElement("p");
    img = document.createElement("img");

    // Generar el anuncio

    if(contador === 0) {
        titulo.textContent = textoAnuncios[0];
        img.src = "Assets/Media/ad1.jpg";
            img.width = "150";
            img.height = "50";

        div_anuncio.appendChild(titulo);
        div_anuncio.appendChild(img);

    } else if (contador === 1) {
        titulo.textContent = textoAnuncios[1];
        img.src = "Assets/Media/ad2.jpg";
            img.width = "150";
            img.height = "50";

        div_anuncio.append(titulo);
        div_anuncio.append(img);

    }; // if - else if

    // Incrementar el valor de contador: 

    contador++;
    if(contador === 2) contador = 0;
    
}; // mostrarAnuncios

// Mostrar los anuncios cada 5 segundos: 

setInterval(mostrarAnuncios, 5000);