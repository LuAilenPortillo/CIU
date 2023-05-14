    
// var modoActual = 'Claro';
// const botonModoOscuro = document.getElementById("botonModoOscuro");
// const botonModoClaro = document.getElementById("botonModoClaro");

// const cambiarModo = function(e){
//     var contenido = document.querySelector('#background');
//     if(modoActual == 'Claro'){
//         contenido.classList.remove("background-claro");
//         contenido.classList.add("background-oscuro");
//         modoActual = 'Oscuro';
//     }
//     else{
//         contenido.classList.remove("background-oscuro");
//         contenido.classList.add("background-claro");
//         modoActual = 'Claro';
//     }
// };

// botonModoOscuro.addEventListener("click", cambiarModo);
// botonModoClaro.addEventListener("click", cambiarModo);
let modoActual = 'Claro';
const botonModoOscuro = document.getElementById("botonModoOscuro");
const botonModoClaro = document.getElementById("botonModoClaro");

const cambiarModo = function(e){
    console.log('entra');
    var contenido = document.querySelector('#background');
    if(modoActual == 'Claro'){
        contenido.classList.remove("background-claro");
        contenido.classList.add("background-oscuro");
        modoActual = 'Oscuro';
    }
    else{
        contenido.classList.remove("background-oscuro");
        contenido.classList.add("background-claro");
        modoActual = 'Claro';
    }
};

botonModoOscuro.addEventListener("click", cambiarModo);
botonModoClaro.addEventListener("click", cambiarModo);