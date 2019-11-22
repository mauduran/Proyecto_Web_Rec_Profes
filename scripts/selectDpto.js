let select = document.getElementById("selectDpto");

let xhr = new XMLHttpRequest();

// 2. Configurar: PUT actualizar archivo
xhr.open('GET', "http://localhost:3000/departamentos");

xhr.setRequestHeader('Content-Type', 'application/json');

// 4. Enviar solicitud
xhr.send();

// 5. Una vez recibida la respuesta del servidor
xhr.onload = function () {

    if (xhr.status != 200) { // analizar el estatus de la respuesta HTTP
        // alert("Usuario Error")
        // Ocurrió un error
        alert("Error. No se pueden mostrar los departamentos");


    } else {
        let dptos = JSON.parse(xhr.response);

        dptos.forEach(element => {
            select.innerHTML+= '<option value="'+element+'">'+element+' </option>';
        });

    }

}