// String
var j1 = "papel";
var j2 = "tijera";

//Empates 👾
if (j1 == "piedra" && j2 == "piedra") {
    console.log("empate");
} else if (j1 == "tijera" && j2 == "tijera") {
    console.log("empate");
} else if (j1 == "papel" && j2 == "papel") {
    console.log("empate");
}

// J1
if (j1 == "papel" && j2 == "piedra") {
    console.log("Gana J1");
} else if (j1 == "tijera" && j2 == "papel") {
    console.log("Gana J1");
} else if (j1 == "piedra" && j2 == "tijera") {
    console.log("Gana J1");
}

// J2
if (j1 == "papel" && j2 == "tijera") {
    console.log("Gana J2");
} else if (j1 == "tijera" && j2 == "piedra") {
    console.log("Gana J2");
} else if (j1 == "piedra" && j2 == "papel") {
    console.log("Gana J2");
}

function myFunction() {
    console.log("mi funcion");
}

myFunction();

function suma(a, b) {
    console.log(a - b);
}

suma(3, 4);
suma(9, 1);

function sum(a, b) {
    var resultado = a + b;
    return resultado;
}

var res = sum(2, 2);
console.log(res);


function juego(j1, j2) {
    //Empates 👾
    if (j1 == "piedra" && j2 == "piedra") {
        return "empate"
    } else if (j1 == "tijera" && j2 == "tijera") {
        return "empate"
    } else if (j1 == "papel" && j2 == "papel") {
        return "empate"
    }

    // J1
    if (j1 == "papel" && j2 == "piedra") {
        return "Gana J1"
    } else if (j1 == "tijera" && j2 == "papel") {
        return "Gana J1"
    } else if (j1 == "piedra" && j2 == "tijera") {
        return "Gana J1"
    }

    // J2
    if (j1 == "papel" && j2 == "tijera") {
        return "Gana J2"
    } else if (j1 == "tijera" && j2 == "piedra") {
        return "Gana J2"
    } else if (j1 == "piedra" && j2 == "papel") {
        return "Gana J2"
    }
}

var fin = juego("papel", "piedra");
console.log(fin);

var numero = 2;

function evaluate(numero) {
    if (numero >= 0) {
        var final = "Positivo";
        return final;
    } else {
        var final = "Negativo";
        return final;
    }
}