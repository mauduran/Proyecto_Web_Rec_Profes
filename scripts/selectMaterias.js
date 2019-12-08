let sel = document.getElementById("selectMateria");

let xhr2 = new XMLHttpRequest();

// 2. Configurar: PUT actualizar archivo
xhr2.open('GET', "https://ratemyprofe.herokuapp.com/api/materias");

xhr2.setRequestHeader('Content-Type', 'application/json');

// 4. Enviar solicitud
xhr2.send();

// 5. Una vez recibida la respuesta del servidor
xhr2.onload = function () {

    if (xhr2.status != 200) { // analizar el estatus de la respuesta HTTP
        // alert("Usuario Error")
        // Ocurrió un error
        alert("Error. No se pueden mostrar los departamentos");


    } else {
        let dptos = JSON.parse(xhr2.response);

        dptos.forEach(element => {
            sel.innerHTML+= '<option value="'+element.nombre+'">'+element.nombre+' </option>';
        });

    }

}