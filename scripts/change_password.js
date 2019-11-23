let btnSubmit = document.getElementById("btnSubmit");
let correoFeo = document.getElementById("correoId");
let contraseñaId = document.getElementById("contraseñaId");
let contraseña2Id = document.getElementById("contraseña2Id");
let usuario;

btnSubmit.classList.add("disabled");
contraseñaId.addEventListener('keyup', activarBoton);
contraseña2Id.addEventListener('keyup', activarBoton);

btnSubmit.addEventListener('click', sumit);

function activarBoton() {
    if (contraseñaId.value == contraseña2Id.value) {
        btnSubmit.classList.remove("disabled");
    } else {
        btnSubmit.classList.add("disabled");
    }
};

function sumit(){
    event.preventDefault();
    buscar();
}

function buscar() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/users?email=${correoFeo.value}`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            usuario = JSON.parse(xhr.response);
            if(usuario.lenght == 0){
                alert("No existe un usuario con este correo")
            }else{
                usuario[0].password = contraseña2Id.value;
                //savePassword(usuario[0]);
                alert("Se te enviará un correo en breve para completar el cambio de contraseña.");
            }
        }
    }
};

/*
function savePassword(datos) {
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', `http://localhost:3000/usuarios/${datos.id}`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send([JSON.stringify(datos)]);
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            console.log("Relación registada exitosamente");
        }
    }
};*/
