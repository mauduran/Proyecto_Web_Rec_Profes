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
        //console.log("hey");
        let usr = document.getElementById("email");
        let pass = document.getElementById("password");

        let obj = {
            email: usr.value,
            password: pass.value
        };


        // 1. Crear XMLHttpRequest object
        let xhr = new XMLHttpRequest();

        xhr.open('POST', "https://ratemyprofe.herokuapp.com/api/login");
        xhr.setRequestHeader("Content-Type", "application/json")


        xhr.send(JSON.stringify(obj));


        xhr.onload = function () {


            if (xhr.status != 200) { // analizar el estatus de la respuesta HTTP
                // alert("Usuario Error")
                // Ocurrió un error
                alert("Login no se pudo concretar.\n Usuario y/o Contraseña incorractos.");
                // document.getElementById("registroErrorAlert").style.display = "block";


            } else {
                let obj = JSON.parse(xhr.responseText);
                localStorage.token = obj.token;
                localStorage.expediente = obj.expediente;
                localStorage.rol = obj.rol;

                let newLoc = window.location.href

                newLoc = newLoc.split('/');

                newLoc[newLoc.length - 1] = "index.html";

                newLoc = newLoc.join("/");

                window.location.href = newLoc;

            }
        };
    }

}