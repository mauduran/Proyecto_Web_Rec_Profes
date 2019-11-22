let nombreMa = document.getElementById("NombreMateria");
let departamento = document.getElementById("selectDpto");
let creditos = document.getElementById("credi");
let botonCancelar = document.getElementById("botonCancelar");
let botonEnviar = document.getElementById("botonEnviar");

botonEnviar.classList.add("disabled");


nombreMa.addEventListener('keyup', activarBoton);
departamento.addEventListener('change', activarBoton);
creditos.addEventListener('change', activarBoton);

botonCancelar.addEventListener('click', cancelar);

botonEnviar.addEventListener('click', guardarMateria);

function activarBoton() {
    if (nombreMa.value == "" || departamento.value == "Departamento" || creditos.value == "") {
        botonEnviar.classList.add("disabled");
    } else {
        botonEnviar.classList.remove("disabled");
    }
};

function cancelar() {
    window.location.href = "/index.html";
}

function guardarMateria() {
    let maestro = {
        "nombre": nombreMa.value,
        "descripción": "",
        "creditos": creditos.value,
        "departamento": departamento.value
    }

};

