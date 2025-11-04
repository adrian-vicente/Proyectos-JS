
// Funciones anónimas: 

let suma = function(v1, v2) {
    return v1 + v2;

}; // suma()

alert(suma(10, 20));

// Función anónima 2: 

let toString = function(cad) {
    if(isNaN(cad)) {
        return String(cad);

    }; // if
};

let num = 10;
let num_txt = toString(num);