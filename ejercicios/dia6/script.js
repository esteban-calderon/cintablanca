var m1 = "pedrito";
var m2 = "rufo";
var m3 = "chancla";

console.log("Mis mascostas son" + " " + m1 + " " + m2 + " " + m3 + " " + "les quiero mucho");

function saludo() {
    var mascotas = prompt("Nombre de tu mascota preferida", "Nombre de la primer mascota");
    if (mascotas != null) {
        var otra = prompt("otra mascota", "su nombre");
        if (otra != null && mascotas != null) {
            document.getElementById("info").innerHTML = "Sus nombres son " + mascotas + " " + "y" + " " + otra + "! muy lindas tus mascotas";
        }
    }
}