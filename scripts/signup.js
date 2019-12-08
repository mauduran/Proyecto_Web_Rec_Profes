let btnSubmit = document.getElementById("btnSubmit");
let formLogin = document.getElementById("formLogin");

btnSubmit.setAttribute('disabled', true);
let nombre = document.getElementById("nombreId");
let apellido = document.getElementById("apellidoId");
let carrera = document.getElementById("selectCarrera");
let password = document.getElementById("passwordId");
let repassword = document.getElementById("repasswordId");
let expediente = document.getElementById("expedienteId");
let email = document.getElementById("emailId");
let campos;

let existsUser = false;
formLogin.addEventListener("change", function (E) {

    campos = document.querySelectorAll("#formLogin input:invalid");

    if (campos.length == 0 && (password.value == repassword.value)) {
        btnSubmit.removeAttribute('disabled');
    }

})

btnSubmit.onclick = registrarUser;
/*
    "nombre": "apa",
    "apellido": "Picapiedra",
    "rol": "Estudiante",
    "numReviews": "0",
    "password": "ppicapiedra",
    "expediente": "716122",
    "carrera": "Arquitectura",
    "email": "is717122@iteso.mx",
    "id": 2
*/
function registrarUser(E) {
    E.preventDefault();

    let correoMin = email.value.toLowerCase();
    //            console.log(correoMin);
    let newObj = {
        nombre: nombre.value,
        apellido: apellido.value,
        rol: "Estudiante",
        numReviews: "0",
        password: password.value,
        expediente: expediente.value,
        carrera: carrera.value,
        email: email.value,
    }
    // console.log(newObj);

    //Revisar que no exista ya ese usuario.
    let xhr4 = new XMLHttpRequest();

    // 2. Configurar: PUT actualizar archivo
    xhr4.open('GET', "https://ratemyprofe.herokuapp.com/api/users");

    xhr4.setRequestHeader('Content-Type', 'application/json');

    // 4. Enviar solicitud
    xhr4.send();

    // 5. Una vez recibida la respuesta del servidor
    xhr4.onload = function () {

        if (xhr4.status != 200) { // analizar el estatus de la respuesta HTTP
            // alert("Usuario Error")
            // Ocurrió un error
            alert("Error. No se pueden mostrar las usuarios");


        } else {
            let usersArr = JSON.parse(xhr4.response);
            usersArr.forEach(element => {
                // console.log(element);
                if (element.email == newObj.email) {
                    // console.log(element.email);
                    // console.log(newObj.email);
                    // console.log(existsUser);
                    existsUser = true;
                    // console.log(existsUser);
                }
            });

            if (existsUser == true) {
                alert('Ya existe un usuario con esos datos');
                existsUser = false;
            } else {
                

        // 1. Crear XMLHttpRequest object
        let xhr = new XMLHttpRequest();
        // 2. Configurar:  PUT actualizar archivo
        xhr.open('POST','https://ratemyprofe.herokuapp.com/api/requests');
        // 3. indicar tipo de datos JSON
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        // 4. Enviar solicitud al servidor
        console.log(newObj);
        xhr.send(JSON.stringify(newObj));

        newObj.id = undefined;

        // 5. Una vez recibida la respuesta del servidor
        xhr.onload = function () {
            if (xhr.status != 201) { // analizar el estatus de la respuesta HTTP
                // Ocurrió un error
                //alert(xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found
                alert('Ya existe un usuario con esos datos');
            
            } else {
                //console.log(xhr.responseText); // Significa que fue exitoso
                alert('Procesaremos tu solicitud');
                window.location.href = "./index.html";
            }
        };
    }

    
            }

        }

    
}