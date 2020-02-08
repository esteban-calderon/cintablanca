
// Para
// i indice, condicion, aumento
// for(i = 0; i < 5; i = i + 1) {
//     console.log("Iteracion numero " + i);
// }

for (i = 1; i <= 100; i = i + 1) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// arreglos == arrays
//              0             1         2
var paises = ["Colombia", "Mexico", "Costa Rica", "Peru", "ecuador", "canada"];
var numeros = [5, 6, 7, 8];

console.log(paises[2])

for (i = 0; i < paises.length; i++) {
    console.log(paises[i]);
}

for (i = 100; i >= 1; i--) {
    console.log(i);
}

var calificaciones = [4, 5, 3, 2, 1, 3, 5];

// acumuladora
var suma = 0;
// sumar calificaciones
for (i = 0; i < calificaciones.length; i++) {
    suma = suma + calificaciones[i];
}
var promedio = suma / calificaciones.length;
console.log(promedio.toFixed(2));