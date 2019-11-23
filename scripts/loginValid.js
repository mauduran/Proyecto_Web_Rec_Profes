let regBtn = document.getElementById("login")



let loginForm = document.getElementById("loginForm");


loginForm.addEventListener("change", validarRegistro);

regBtn.onclick = login;

function validarRegistro(event) {


    let invalids = document.querySelectorAll("#loginForm input:invalid");

    let pass = document.getElementById("password");
    document.querySelectorAll("#loginForm input:not(:invalid)").forEach(function (el) {
        el.classList.remove("error");
    })

    Array.from(invalids).forEach(function (element) {
        element.classList.add("error");
    });

}


function login(event) {
    let invalids = document.querySelectorAll("#loginForm input:invalid");
    event.preventDefault();
    if (invalids.length == 0) {
        console.log("hey");
        let usr = document.getElementById("email");
        let pass = document.getElementById("password");

        let obj = {
            correo: usr.value,
            password: pass.value
        };


        // 1. Crear XMLHttpRequest object
        let xhr = new XMLHttpRequest();

        xhr.open('GET', "http://localhost:3000/users?email=" + usr.value);


        xhr.send();


        xhr.onload = function () {


            if (xhr.status != 200) { // analizar el estatus de la respuesta HTTP
                // alert("Usuario Error")
                // Ocurrió un error
                alert("Login no se pudo concretar.\n" + xhr.status + " " + xhr.statusText);
                // document.getElementById("registroErrorAlert").style.display = "block";


            } else {

                let obj = JSON.parse(xhr.responseText);
                // console.log(obj.password + " " + pass.value);
                if (obj.length == 0) {
                    document.getElementById("registro_incorrect").style.display = "block";
                } else if (obj[0].password == pass.value) {

                    localStorage.expediente = obj[0].expediente;
                    localStorage.role = obj[0].rol;
                    let newLoc = window.location.href

                    newLoc = newLoc.split('/');

                    newLoc[newLoc.length-1] = "index.html";

                    newLoc = newLoc.join("/");

                    window.location.href = newLoc;
                } else {
                    document.getElementById("registro_incorrect").style.display = "block";
                }
            }
        };
    }

}