let nombreM = document.getElementById("NombreMaestro");
let departamento = document.getElementById("selectDpto");
let experiencia = document.getElementById("exp");
let botonCancelar = document.getElementById("botonCancelar");
let botonEnviar = document.getElementById("botonEnviar");

botonEnviar.classList.add("disabled");


nombreM.addEventListener('keyup', activarBoton);
departamento.addEventListener('change', activarBoton);
experiencia.addEventListener('change', activarBoton);

botonCancelar.addEventListener('click', cancelar);

botonEnviar.addEventListener('click', guardarMaestro);

function activarBoton() {
    if (nombreM.value == "" || departamento.value == "Departamento" || experiencia.value == "") {
        botonEnviar.classList.add("disabled");
    } else {
        botonEnviar.classList.remove("disabled");
    }
};

function cancelar() {
    window.location.href = "/index.html";
}

function guardarMaestro() {
    let maestro = {
        "nombre": nombreM.value,
        "departamento": departamento.value,
        "añosExp": experiencia.value,
        "materias": [""]
    }
    saveMaestro(maestro);
};

function saveMaestro(datos) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "https://http://localhost:3000/materias");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send([JSON.stringify(datos)]);
    xhr.onload = function () {
        if (xhr.status != 201) { 
            alert(xhr.status + ': ' + xhr.statusText); 
         } else {
            alert("Maestro registado exitosamente"); 
        }