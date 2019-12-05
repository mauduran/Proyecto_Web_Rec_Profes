if (localStorage.role != 'Admin') {
    window.location.href = "/index.html";
}
let idPresionado = 0;
let idCardRegistry = document.getElementById("idCardRegistry");

console.log(idCardRegistry);

let xhr3 = new XMLHttpRequest();

// 2. Configurar: PUT actualizar archivo
xhr3.open('GET', "http://localhost:3000/Sugerencias");

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
        let sugerencias = JSON.parse(xhr3.response);
        /*
                    expedienteEstudiante: datos.expedienteEstudiante,
                    profesor: datos.profesor,
                    materia: datos.materia,
                    Reseña: datos.Reseña,
                    idReseña: datos.id,
                    descripcion: message_text.value,
                    rol: localStorage.role
        */
        sugerencias.forEach(element => {
            idCardRegistry.innerHTML += `
            <div class="editable">
                <span class="del" aria-hidden="true" data-toggle="modal" data-target="#Modal0" onclick="idPress('${element.id}')" hidden>&times;</span>
            </div>

            <div class="jumbotron">
                <div class="card-body">
                    <h2 class="card-title"><b>Petición: </b>${element.idReseña}</h2>
                    <h4 class="sub"><b>Expediente de estudiante: </b> ${element.expedienteEstudiante}</h4>
                    <h4 class="sub"><b>Profesor: </b> ${element.profesor}</h4>
                    <h4 class="sub"><b>Materia: </b> ${element.materia}</h4>
                    <h4 class="sub"><b>Reseña: </b> ${element.Reseña}</h4>
                    <h4 class="sub"><b>Razón de petición: </b> ${element.descripcion}</h4>
                    <div class="goRight"> 
                            <button type="button" class="btn btn-primary btn-lg col-sm-5" id="btnRechazar" onclick="eliminarRequest('${element.id}')">Rechazar</button>                                                        
                            <button type="button" class="btn btn-primary btn-lg col-sm-5" id="btnAceptar" onclick="aceptarRequest('${element.id}')">Aceptar</button>
                    </div>
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


function eliminarRequest(clave) {
    //console.log(correo);
    // 1. Crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2. Configurar:  PUT actualizar archivo
    xhr.open('DELETE', 'http://localhost:3000/Sugerencias/' + clave);
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
            alert('No existe la petición a eliminar');

        } else {
            //console.log(xhr.responseText); // Significa que fue exitoso
            alert('Reseña eliminada');
            //solicitarUsuarios();
            // document.getElementById('usuarios').innerHTML = "";
            //solicitarUsuarios();
            location.reload();
        }
    };
}

function aceptarRequest(clave) {
    // 1. Crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    // 2. Configurar: PUT actualizar archivo
    xhr.open('GET', 'http://localhost:3000/Reviews/' + clave);

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

            // 1. Crear XMLHttpRequest object
            let xhr2 = new XMLHttpRequest();
            // 2. Configurar:  PUT actualizar archivo
            xhr2.open('DELETE', 'http://localhost:3000/Reviews/' + clave);
            // 3. indicar tipo de datos JSON
            xhr2.setRequestHeader('Content-Type', 'application/json');

            // 4. Enviar solicitud al servidor
            xhr2.send();
            // 5. Una vez recibida la respuesta del servidor
            xhr2.onload = function () {
                if (xhr2.status != 200) { // analizar el estatus de la respuesta HTTP
                    // Ocurrió un error
                    //alert(xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found
                    console.log(xhr2.response);
                    alert('No existe la petición a eliminar');

                } else {
                    //console.log(xhr.responseText); // Significa que fue exitoso
                    //alert('Reseña eliminada');
                    //solicitarUsuarios();
                    // document.getElementById('usuarios').innerHTML = "";
                    //solicitarUsuarios();
                    //location.reload();
                    //Eliminar el request
                    eliminarRequest(clave);
                }
            };



        }
    };

}