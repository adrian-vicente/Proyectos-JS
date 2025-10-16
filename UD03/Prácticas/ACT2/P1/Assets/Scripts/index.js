/**
 * Adrián Vicente Vera
 * UD2 ACT2 - Pregunta 1
 * 
 */

// Declaración de variables: 

let ancho = 400; 
let alto = 300;
let nuevaVentana = null;

// Proceso para abrir la ventana: 

    // Recoger el botón que abrirá la nueva ventana: 

    let boton = document.getElementById("btnVentana");

    // Crear un add event listener para poder ejecutar la función: 

    boton.addEventListener("click", function() {

        // Abrir una nueva ventana: 

        nuevaVentana = abrirVentana(ancho, alto);

        // Escribir en la ventana actual .

        escribirVentana("Ejemplo de Ventana Nueva", nuevaVentana);

        // Recoger y escribir la información solicitada en la ventana nueva: 

        let informacion = obtenerDatosVentana(nuevaVentana);
        nuevaVentana.document.writeln("<br>");
        nuevaVentana.document.writeln(`<p>${informacion}</p>`);

        // Escribir en la ventana principal: TAREA DWEC03

        let ventanaPrincipal = window;
        let parrafoTexto = ventanaPrincipal.document.getElementById("pregunta1__texto--EscribirVentanaPrincipal");
        parrafoTexto.innerText = "TAREA DWEC_03"; // Lo hago así para mantener un poco el orden

        // Solicitar la introducción de nombre y apellidos

        let nombre = nuevaVentana.prompt("Introduce tu nombre y apellidos");

        // Solicitar el día de nacimiento 

        let diaNacimiento = parseInt(nuevaVentana.prompt("Introduce el día de tu nacimiento"));

        // Solicitar el mes de nacimiento 

        let mesNacimiento = parseInt(nuevaVentana.prompt("Introduce el mes de tu nacimiento (Número): "));

        // Solicitar el año de nacimiento 

        let anyoNacimiento = parseInt(nuevaVentana.prompt("Introduce el año de nacimiento: ")); 

        // Formular el mensaje: 

        let mensaje = "Buenos días " + nombre + ", tu nombre tiene: " + nombre.length + " carácteres, incluidos los espacios. La primera letra A de tu nombre está en la posición: " + nombre.indexOf("A") + " si es en mayúsculas o: " + nombre.indexOf("a") + " si es en minúscula" + " , pero, la última letra A está en la posición: " + nombre.lastIndexOf("A") + " si es en mayúscula o : " + nombre.lastIndexOf("a") + " si es en minúscula, tu nombre menos las 3 primeras letras es: " + nombre.slice(3) + ", tu nombre todo en mayúsculas es: " + nombre.toUpperCase() + ", tu edad es de: " + calcularEdad(anyoNacimiento) + " años. Naciste un feliz: " + diaNacimiento + "/0" + mesNacimiento + " del año " + anyoNacimiento;
       
        // Imprimir toda la información generada en la pantalla principal: 

        let p2 = ventanaPrincipal.document.getElementById("pregunta1__texto--EscribirVentanaPrincipal2");
        p2.innerText = mensaje; 

        // Imprimir las 3 últimas indicaciones del enunciado: 

        let p3 = ventanaPrincipal.document.getElementById("pregunta1__texto--EscribirVentanaPrincipal3");
        
        // Obtener la información que solicita el ejercicio: 
        
        let coseno = Math.cos(180);
        let valorMaximo = Math.max(34, 67, 23, 75, 35, 19);
        let numeroAleatorio = Math.floor(Math.random() * (10 - 1 + 1) + 1); // Pienso que sean números enteros del 1 al 10.
        
        let mensaje2 = "Coseno de 180: " + coseno + ", valor máximo del rango indicado: " + valorMaximo + ", número aleatorio generado: " + numeroAleatorio;
        
        // Añadir a p3 el mensaje creado anteriormente: 

        p3.innerText = mensaje2;

    });

// Función que abrirá la ventana: 

function abrirVentana(ancho, alto) {
    return window.open('', '_blank', ancho, alto);

}; // abrirVentana()

// Función para escribir en la nueva ventana:

function escribirVentana(texto, ventana) {
    ventana.document.writeln(`<h3>${texto}</h3>`);

}; // escribirVentana()

function obtenerDatosVentana(ventana) {
    let informacion = "- URL COMPLETA: " + ventana.location.href + "<br>- PROTOCOLO UTILIZADO: " + ventana.location.protocol + "<br>- NOMBRE DEL NAVEGADOR: " + ventana.navigator.userAgent;
    return informacion;

}; // obtenerDatosVentana

// Función para calcular la edad: 

function calcularEdad(anyoNacimiento) {
    let fecha = new Date();
    return fecha.getFullYear() - anyoNacimiento;

}; // calcularEdad()