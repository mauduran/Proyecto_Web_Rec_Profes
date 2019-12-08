if (localStorage.rol != "Estudiante") {
    document.getElementById("addReview").setAttribute("hidden", true);
}




document.getElementById("addReview").addEventListener("click", doReview);

// Falta mostrar borrado para admin 
//Falta crear modal y mostrar edicion para coordi y que recomiende al admin borrar una reseña


let args = window.location.href.split('?');
if (args[1] == undefined || args[2] == undefined) {
    window.location.href = "profes.html";
}

let idPresionado = 0;

let profe = args[1];

profe = profe.split("%20").join(" ").split("%C3%B3").join("ó").split("%C3%A1").join("á").split("%C3%A9").join(
    "é").split("%C3%AD").join("í").split("%C3%BA").join("ú");

let materia = args[2];

materia = materia.split("%20").join(" ").split("%C3%B3").join("ó").split("%C3%A1").join("á").split("%C3%A9")
    .join("é").split("%C3%AD").join("í").split("%C3%BA").join("ú");


function doReview() {
    window.location.href = `review_form.html?${profe}?${materia}`;
}



let sel = document.getElementById("selectMateria");

let xhr = new XMLHttpRequest();

// 2. Configurar: PUT actualizar archivo
xhr.open('GET', `https://ratemyprofe.herokuapp.com/api/detalleMaterias?profesor=${profe}&materia=${materia}`);

xhr.setRequestHeader('Content-Type', 'application/json');

// 4. Enviar solicitud
xhr.send();

// 5. Una vez recibida la respuesta del servidor
xhr.onload = function () {

    if (xhr.status != 200) { // analizar el estatus de la respuesta HTTP
        // alert("Usuario Error")
        // Ocurrió un error
        alert("Error. No se pueden mostrar los datos de este docente para esta clase");


    } else {
        let detalle = JSON.parse(xhr.response)[0];

        document.getElementById('numReviews').innerText = detalle.numReviews;
        document.getElementById('curso').innerText = detalle.materia;
        document.getElementById('docente').innerText = detalle.profesor;
        document.getElementById("overall").innerText = detalle["experienciaGeneral"];
        document.getElementById("dificultad").innerText = detalle.dificultad;
        document.getElementById("preparacion").innerText = detalle.preparación;
        document.getElementById("carga").innerText = detalle["cargaTrabajo"];
        document.getElementById("flexibilidad").innerText = detalle.flexibilidad;
        document.getElementById("ritmo").innerText = detalle.ritmo;

    }

}


let reviewReq = new XMLHttpRequest();

// 2. Configurar: PUT actualizar archivo
reviewReq.open('GET', `https://ratemyprofe.herokuapp.com/api/reviews?profesor=${profe}&materia=${materia}`);

reviewReq.setRequestHeader('Content-Type', 'application/json');

// 4. Enviar solicitud
reviewReq.send();

// 5. Una vez recibida la respuesta del servidor
reviewReq.onload = function () {

    if (reviewReq.status != 200) { // analizar el estatus de la respuesta HTTP
        // alert("Usuario Error")
        // Ocurrió un error
        alert("Error. No se pueden mostrar las reseñas");


    } else {
        let reviews = JSON.parse(reviewReq.response);

        let contain = document.getElementById("reviewContainer");


        contain.innerHTML = "";
        let id = 1;

            reviews.forEach(element => {

                contain.innerHTML += `<div class="reg-element">


            <div class="jumbotron">
                <div class="card-body">

                            <div class="editable" >
                                <span class="ed"><i class="fa fa-pen" onclick="idPress('${element.id}')" data-toggle="modal" data-target="#Modal0"></i></span>
                                <span class="del" aria-hidden="true" hidden>&times;</span>
                            </div>
                    <sup class="card-title">${element.expedienteEstudiante}</sup>

                    <table width="30%">

                        <tr>
                            <td width="70%">
                                <p class="sub d-inline-block"><b>Experiencia General: </b> </p>
                            </td>
                            <td id="overall${element.id}">
                                <span class="fa fa-star in"></span>
                                <span class="fa fa-star in"></span>
                                <span class="fa fa-star in"></span>
                                <span class="fa fa-star in"></span>
                                <span class="fa fa-star in"></span></td>
                        </tr>
                        <tr>
                            <td width="70%"> 
                                <p class="sub d-inline-block"><b>Dificultad: </b> </p>
                            </td>
                            <td id="dificultad${element.id}">
                                <span class="fas fa-exclamation-triangle in"></span>
                                <span class="fas fa-exclamation-triangle in"></span>
                                <span class="fas fa-exclamation-triangle in"></span>
                                <span class="fas fa-exclamation-triangle in"></span>
                                <span class="fas fa-exclamation-triangle in"></span>
                            </td>
                        </tr>
                        <tr>
                            <td width="70%">
                                <p class="sub d-inline-block"><b>Preparación: </b> </p>
                            </td>
                            <td id="preparacion${element.id}">
                                <span class="fa fa-graduation-cap in"></span>
                                        <span class=" fa fa-graduation-cap in"></span>
                                <span class="fa fa-graduation-cap in"></span>
                                    <span class=" fa fa-graduation-cap in"></span>
                                <span class="fa fa-graduation-cap in"></span>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td width="70%">
                                    <p class=" sub d-inline-block"><b>Carga de Trabajo: </b> </p>
                            </td>
                            <td id="carga${element.id}">
                                <span class="fas fa-book in"></span>
                                <span class="fas fa-book in"></span>
                                <span class="fas fa-book in"></span>
                                <span class="fas fa-book in"></span>
                                <span class="fas fa-book in"></span>
                            </td>
                        </tr>
                        <tr>
                            <td width="70%">
                                <p class="sub d-inline-block"><b>Flexibilidad: </b> </p>
                            </td>
                            <td id="flexibilidad${element.id}">
                                <span class="fa fa-balance-scale in"></span>
                                <span class="fa fa-balance-scale in"></span>
                                <span class="fa fa-balance-scale in"></span>
                                <span class="fa fa-balance-scale in"></span>
                                <span class="fa fa-balance-scale in"></span>
                            </td>
                        </tr>
                        <tr>
                            <td width="70%">
                                <p class="sub d-inline-block"><b>Ritmo de la Clase: </b> </p>
                            </td>
                            <td id="ritmo${element.id}">
                                <span class="fa  fa-running in"></span>
                                <span class="fa  fa-running in"></span>
                                <span class="fa  fa-running in"></span>
                                <span class="fa  fa-running in"></span>
                                <span class="fa  fa-running in"></span>
                            </td>
                        </tr>
                    </table>

                    <h5><b>Volvería a tomarla:</b> ${element.takeAgain}</h5>
                    <h5><b>Optativa:</b> ${element.Optativa} </h5>
                    <br>

                    <h5><b>Reseña:</b></h5>
                    <h5> ${element.Reseña}</h5>
                </div>
            </div>

        </div>`;

        if(localStorage.rol!="Coordinador"){
            Array.from(document.getElementsByClassName("ed")).forEach(element => {
                element.setAttribute("hidden",true);
            });
        }

                let i;

                let temp = document.getElementById("overall" + element.id).children;
                for (i = 0; i < element["experienciaGeneral"]; i++) {
                    temp[i].classList.remove("in");
                }


                temp = document.getElementById("dificultad" + element.id).children;
                for (i = 0; i < element["dificultad"]; i++) {
                    temp[i].classList.remove("in");
                }

                temp = document.getElementById("preparacion" + element.id).children;
                for (i = 0; i < element.preparación; i++) {
                    temp[i].classList.remove("in");
                }


                temp = document.getElementById("carga" + element.id).children;
                for (i = 0; i < element["cargaTrabajo"]; i++) {
                    temp[i].classList.remove("in");
                }

                temp = document.getElementById("flexibilidad" + element.id).children;
                for (i = 0; i < element.flexibilidad; i++) {
                    temp[i].classList.remove("in");
                }


                temp = document.getElementById("ritmo" + element.id).children;
                for (i = 0; i < element.ritmo; i++) {
                    temp[i].classList.remove("in");
                }

                id++;
            });
        


    }

}

let message_text = document.getElementById("message-text");


function idPress(contador) {
    idPresionado = contador;
}

function enviarSolicitud() {
    if (localStorage.rol == 'Coordinador') {
        // 1. Crear XMLHttpRequest object

        let xhr = new XMLHttpRequest();

        

        // 2. Configurar: PUT actualizar archivo
        xhr.open('GET', 'https://ratemyprofe.herokuapp.com/api/reviews/' + idPresionado);

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

                let newObj = {
                    expedienteEstudiante: datos.expedienteEstudiante,
                    profesor: datos.profesor,
                    materia: datos.materia,
                    Reseña: datos.Reseña,
                    idReseña: datos.id,
                    descripcion: message_text.value,
                    rol: localStorage.rol
                }

                console.log(datos);

                // 1. Crear XMLHttpRequest object
                let xhr2 = new XMLHttpRequest();
                // 2. Configurar:  PUT actualizar archivo
                xhr2.open('POST', 'https://ratemyprofe.herokuapp.com/api/sugerencias');
                // 3. indicar tipo de datos JSON
                xhr2.setRequestHeader('Content-Type', 'application/json');
                xhr2.setRequestHeader('x-auth-user', localStorage.token);
                // 4. Enviar solicitud al servidor
                xhr2.send(JSON.stringify(newObj));

                // 5. Una vez recibida la respuesta del servidor
                xhr2.onload = function () {
                    if (xhr2.status != 201) { // analizar el estatus de la respuesta HTTP
                        // Ocurrió un error
                        //alert(xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found

                        alert('No pudimos realizar tu sugerencia.');

                    } else {

                        alert('Procesaremos tu solicitud.');
                    }
                };
            }

        }
    } else {
        alert('No puedes hacer una sugerencia de eliminado porque eres ADMIN');
    }
}