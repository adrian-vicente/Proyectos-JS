/*

- UNIDAD: 03 
- Autor: Adrián Vicente Vera
- Curso: 2ºCFGS Desarrollo de Aplicaciones Web Semipresencial
- Actividad 1 - Ejercicio 2

Mostrar una fecha con formato DiaSemana, DiaMes de Mes del Año a las 
horas:minutos:segundos. Por ejemplo:  Miercoles, 9 de Diciembre del 2015 a las 18:45:32. 

// Apuntes míos: 

Mes: Diciembre, valor: 11
Día: 9, valor: 9

*/

// Declarar variable de tipo fecha: 

let fecha2 = new Date(2015, 11, 9, 18, 45, 32);
const DIAS_SEMANA = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];

// Sacar el día de la semana para la fecha indicada: 

let diaSemana = DIAS_SEMANA[fecha2.getDay()];
let mes2 = MESES[fecha2.getMonth()];

// Imprimir la fecha por un alert()

document.writeln("<br>Fecha ejercicio 2: " + diaSemana + ", " + fecha2.getDate() + " de " + mes2 + " del " + fecha2.getFullYear() + " a las " + fecha2.getHours() + ":" + fecha2.getMinutes() + ":" + fecha2.getSeconds());