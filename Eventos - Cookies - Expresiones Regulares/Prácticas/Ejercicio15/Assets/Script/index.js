
// Declaración de variables: 

let contador = 0;

// Proceso para detectar cada vez que se hace scroll en la página: 

function calcularScroll() {
    contador++;
    if(contador === 15) {
        alert(`Te estás moviendo demasiado, registro de scroll conteado: ${contador}`);

    }; 

};