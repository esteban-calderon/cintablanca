var miNombre = "Esteban Calderón 👾";
var miProfesion = "Diseñador Multimedial 🖥";
var miCorreo = "soy@estebancalderon.co";
var misHabilidades = ["Html", "CSS", "JavaScript"]

function cambia(){
    var nombre = document.getElementById("nombre");
    nombre.innerHTML = miNombre;
    var profesion = document.getElementById("profesion");
    profesion.innerHTML = miProfesion;
    var correo = document.getElementById("correo");
    correo.innerHTML = miCorreo;
    var habilidades = document.getElementById("habilidades");
    habilidades.innerHTML = misHabilidades;
}

function limpiar(){
    var nombre = document.getElementById("nombre");
    nombre.innerHTML = "Mi nombre";
    var profesion = document.getElementById("profesion");
    profesion.innerHTML = "Mi profesion";
    var correo = document.getElementById("correo");
    correo.innerHTML = "Mi correo";
    var habilidades = document.getElementById("habilidades");
    habilidades.innerHTML = "Mis Habilidades";
}