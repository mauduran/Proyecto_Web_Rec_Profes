if (localStorage.role != 'Admin') {
    window.location.href = "/index.html";
}
let idPresionado = 0;
let idCardRegistry = document.getElementById("idCardRegistry");

console.log(idCardRegistry);

let xhr3 = new XMLHttpRequest();

// 2. Configurar: PUT actualizar archivo
xhr3.open('GET', "http://localhost:3000/users");

xhr3.setRequestHeader('Content-Type', 'application/json');

// 4. Enviar solicitud
xhr3.send();

// 5. Una vez recibida la respuesta del servidor
xhr3.onload = function () {

    if (xhr3.status != 200) { // analizar el estatus de la respuesta HTTP
        // alert("Usuario Error")
        // Ocurrió un error
        alert("Error. No se pueden mostrar los users");


    } else {
        let users = JSON.parse(xhr3.response);

        users.forEach(element => {
            idCardRegistry.innerHTML += `
            <div class="editable">
                <span class="del" aria-hidden="true" data-toggle="modal" data-target="#Modal0" onclick="idPress('${element.id}')">&times;</span>
            </div>

            <div class="jumbotron">
                <div class="card-body">
                    <h5 class="card-title">${element.nombre + " " +  element.apellido}</h5>
                    <p class="sub"><b>Expediente: </b> ${element.expediente}</p>
                    <p class="sub"><b>Email: </b> ${element.email}</p>
                    <p class="sub"><b>Carrera: </b> ${element.carrera}</p>
                    <p class="sub"><b>Número de Reseñas: </b> ${element.numReviews}</p>
                </div>
            </div>
            `;
        });

    }

}

function idPress(contador) {
    idPresionado = contador;
    console.log(idPresionado);
}

function eliminarUsuario() {
    // 1. Crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2. Configurar:  PUT actualizar archivo
    xhr.open('DELETE', 'http://localhost:3000/users/' + idPresionado);
    // 3. indicar tipo de datos JSON
    xhr.setRequestHeader('Content-Type', 'application/json');

    // 4. Enviar solicitud al servidor
    xhr.send();
    // 5. Una vez recibida la respuesta del servidor
    xhr.onload = function () {
        if (xhr.status != 200) { // analizar el estatus de la respuesta HTTP
            // Ocurrió un error
            //alert(xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found
            console.log(xhr.response);
            alert('No existe el usuario a eliminar');

        } else {
            //console.log(xhr.responseText); // Significa que fue exitoso
            alert('Usuario eliminado');
            //solicitarUsuarios();
            // document.getElementById('usuarios').innerHTML = "";
            //solicitarUsuarios();
            idPresionado = 0;
            location.reload();
        }
    };
}