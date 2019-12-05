if (localStorage.role != 'Admin') {
    window.location.href = "/index.html";
}
let counter = 1;
let idCardRegistry = document.getElementById("idCardRegistry");
//console.log(idCardRegistry);

let xhr3 = new XMLHttpRequest();

// 2. Configurar: PUT actualizar archivo
xhr3.open('GET', "http://localhost:3000/requests");

xhr3.setRequestHeader('Content-Type', 'application/json');

// 4. Enviar solicitud
xhr3.send();

// 5. Una vez recibida la respuesta del servidor
xhr3.onload = function () {

    if (xhr3.status != 200) { // analizar el estatus de la respuesta HTTP
        // alert("Usuario Error")
        // Ocurrió un error
        alert("Error. No se pueden mostrar los requests");


    } else {
        let requests = JSON.parse(xhr3.response);

        requests.forEach(element => {
            idCardRegistry.innerHTML += `
            <div class="reg-element">
            <div class="jumbotron" data-toggle="modal" data-target="#Modal0">
                <div class="card-body">
                    <h2 class="card-title"><b id="nombreApellido"> ${element.nombre + " " +  element.apellido}</b></h2>
                    <h4 id="rolId"><b>Rol:</b> ${element.rol}</h4>
                    <h4 id="expedienteId"><b>Expediente:</b> ${element.expediente}</h4>
                    <h4 id="carreraId"><b>Carrera:</b> ${element.carrera}</h4>
                    <h4 id="emailId"><b>Email:</b> ${element.email}</h4>
                    <h4 id="numId"><b>Id:</b> ${element.id}</h4>
                    <div class="goRight"> 
                            <button type="button" class="btn btn-primary btn-lg col-sm-5" id="btnRechazar" onclick="eliminarRequest('${element.id}')">Rechazar</button>                                                        
                            <button type="button" class="btn btn-primary btn-lg col-sm-5" id="btnAceptar" onclick="aceptarRequest('${element.id}')">Aceptar</button>
                    </div>
                </div>

            </div>
    </div>
            `;
        });

    }

}

function eliminarRequest(clave) {
    //console.log(correo);
    // 1. Crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2. Configurar:  PUT actualizar archivo
    xhr.open('DELETE', 'http://localhost:3000/requests/' + clave);
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
            //solicitarUsuarios();
            // document.getElementById('usuarios').innerHTML = "";
            //solicitarUsuarios();
            location.reload();
        }
    };
}

function aceptarRequest(clave) {
    let newObj;
    // 1. Crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    // 2. Configurar: PUT actualizar archivo
    xhr.open('GET', 'http://localhost:3000/requests/' + clave);

    // 3. indicar tipo de datos JSON
    xhr.setRequestHeader('Content-Type', 'application/json');

    // 4. Enviar solicitud
    xhr.send();

    // 5. Una vez recibida la respuesta del servidor
    xhr.onload = function () {

        if (xhr.status != 200) { // analizar el estatus de la respuesta HTTP
            // Ocurrió un error
            alert(xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found
            //cbErr(xhr.status + ': ' + xhr.statusText);

        } else {
            let datos = JSON.parse(xhr.response); //esta es la línea que hay que probar
            // Ejecutar algo si todo está correcto
            //console.log(datos); // Significa que fue exitoso
            //cbOk(datos);

            console.log(datos);
            newObj = {
                nombre: datos.nombre,
                apellido: datos.apellido,
                rol: datos.rol,
                numReviews: "0",
                password: datos.password,
                expediente: datos.expediente,
                carrera: datos.carrera,
                email: datos.email
            }

            //Eliminar el request
            eliminarRequest(clave);

            // 1. Crear XMLHttpRequest object
            let xhr2 = new XMLHttpRequest();

            // 2. Configurar:  PUT actualizar archivo
            xhr2.open('POST', 'http://localhost:3000/users');

            // 3. indicar tipo de datos JSON
            xhr2.setRequestHeader('Content-Type', 'application/json');

            // 4. Enviar solicitud al servidor
            xhr2.send([JSON.stringify(newObj)]);

            // 5. Una vez recibida la respuesta del servidor
            xhr2.onload = function () {
                if (xhr2.status != 201) { // analizar el estatus de la respuesta HTTP
                    // Ocurrió un error
                    //alert(xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found
                    alert('Ya existe un usuario con esos datos');

                } else {
                    //console.log(xhr.responseText); // Significa que fue exitoso
                    alert('Usuario Creado');
                }
            };

        }
    };

}