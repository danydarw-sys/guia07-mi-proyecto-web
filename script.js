function saludar() {
let nombre = document.getElementById("nombre").value;
if (nombre === "") {
document.getElementById("resultado").innerText = "Por favor, ingresa tu nombre.";
} else {
document.getElementById("resultado").innerText = "Bienvenido " + nombre + " al sistema de Dany.";
}
}

function validarCorreo() {
let correo = document.getElementById("correo").value;
if (correo === "") {
document.getElementById("mensajeCorreo").innerText = "Ingrese un correo válido.";
} else {
document.getElementById("mensajeCorreo").innerText = "Gracias, " + correo + " ha sido recibido por Dany.";
}
}
