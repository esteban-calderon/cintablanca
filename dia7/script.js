// imprimir numeros del 1 al 100 ✅
// si el 1 es multiplo de 3 -> Fizz ✅
// si el numero es multiplo de 5 -> Buzz ✅
// si es multiplo de 3 y 5 -> FizzBuzz ✅
// si no se cumple ninguno, imprimir solo los numeros ✅

for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

var edad = 29;
var nombre = "Esteban";
var llueve = false;
var habilidades = ["JS", "HTML", "CSS"];
var objeto = {
    nombre: "Cuchara",
    material: "Plastico",
    color: "blanco",
    ciclo: 3,
    reciclable: false,
    usos: ["Comer", "mezclar", "Medir", "Morder", "Arma"],

    //Metodos
    usar: function () {
        return "utilizaste la cuchara";
    }
}

console.log(habilidades);
console.log(habilidades[1]);

console.log(objeto);
console.log(objeto.nombre);
console.log(objeto.usos[1]);
console.log(objeto.usar());

function cambia(){
    var h1 = document.getElementById("nombre");
    h1.innerHTML = "👻👽🎃👾"
}

