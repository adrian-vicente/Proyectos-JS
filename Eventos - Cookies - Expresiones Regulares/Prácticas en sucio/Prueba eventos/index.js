
// Prueba del evento onclick: 

function cambiarColor(elemento) {
    elemento.style.color = "blue";

}; // cambiarColor()

// Función para el evento: MouseDown: 

function MouseDown(elemento) {
    
    // Poner el elemento en negrita: 

    elemento.style.color = "red";
    elemento.style.fontWeight = "bold";

}; // MouseDown

// Función para el evento onmouseout

function mouseOut(elemento) {
    elemento.style.color = "green";
    elemento.style.fontStyle = "italic";
    elemento.style.fontWeight = "bolder;"
    
}; // mouseOut

// Función de prueba para el onmouseover: 

function mouseOver(elemento) {
    elemento.style.backgroundColor = "red";
    elemento.style.color = "black";
    elemento.style.fontWeight = "bolder";

}; // mouseOver

// Función de pruea para el onmouseup: 

function mouseUp(elemento) {
    elemento.style.backgroundColor = "yellow";
    elemento.style.fontWeight = "bolder";
    elemento.style.color = "red";

}; // mouseUp

// Función de prueba para el onmousemove: 

function mouseMove(elemento) {
    elemento.style.backgroundColor = "blue";
    elemento.style.color = "white";
    alert(event.type);
    let p = document.getElementById("coordsX");
    p.innerText = event.screenX;

}; // mouseMove