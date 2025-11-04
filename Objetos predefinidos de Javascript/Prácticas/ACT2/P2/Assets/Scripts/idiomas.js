/**
 * 
 * // SCRIPT DE PRUEBA PARA LOS IDIOMAS SOLAMENTE 

let idiomas = prompt("Introduce idiomas");
let trIdiomas = document.getElementById("tabla--tr__idiomas");
let tdIdiomas = document.getElementById("tabla--td_idiomas");

idiomas = idiomas.split("-");
if(idiomas.length > 1) {

    // Hay que hacer nuevas table row por cada idioma que hay en la lista: 

    for(let i = 0; i < idiomas.length; i++) {
        let nuevaTableRow = document.createElement("tr");
        nuevaTableRow.id = "tabla--tr__idiomas"+(i+1);
        nuevaTableRow.innerHTML = `
            <td></td>
            <td>${idiomas[i]}</td>
        `;
        trIdiomas.insertAdjacentElement("afterend", nuevaTableRow);

    }; // for

} else tdIdiomas.innerText = idiomas;
 * 
 */