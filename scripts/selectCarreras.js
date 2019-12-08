let sel = document.getElementById("selectCarrera");

let xhr3 = new XMLHttpRequest();

// 2. Configurar: PUT actualizar archivo
xhr3.open('GET', "https://ratemyprofe.herokuapp.com/api/carreras");

xhr3.setRequestHeader('Content-Type', 'application/json');


// 4. Enviar solicitud
xhr3.send();

// 5. Una vez recibida la respuesta del servidor
xhr3.onload = function () {

    if (xhr3.status != 200) { // analizar el estatus de la respuesta HTTP
        // alert("Usuario Error")
        // Ocurrió un error
        alert("Error. No se pueden mostrar las carreras");


    } else {
        let carreras = JSON.parse(xhr3.response);

        carreras.forEach(element => {
            sel.innerHTML+= '<option value="'+element.nombre+'">'+element.nombre+' </option>';
        });

    }

}