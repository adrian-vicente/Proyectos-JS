
// Declaración de variables. 

let form = document.getElementById("formulario");
let p = document.createElement("p");

// Función para identificar si es un número: 

function validarNumero(elemento) {
    let input = document.getElementById("formulario__input--numero");
    let valor = input.value;
    if(isNaN(valor)) return false;
    else {
        p.textContent = `El valor ha sido validado correctamente`;
        document.body.appendChild(p);
        alert(`El valor: ${valor}, ha sido validado correctamente`);
        return true;

    }; //if - else

}; 