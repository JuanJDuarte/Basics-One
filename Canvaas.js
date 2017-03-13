document.getElementById("demo").innerHTML = "Hello JavaScript";

var lienzo, cont;

function inicio() {
    "use strict";
    lienzo = document.getElementById("combo");
    cont = lienzo.getContext("2d");
    cont.fillStyle = "black";
    cont.fillRect(20, 20, 100, 50);
}