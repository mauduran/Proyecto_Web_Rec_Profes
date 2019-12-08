let form = document.getElementById("reviewForm");

form.onchange = validateForm;

let args = window.location.href.split('?');
if (args[1] == undefined || args[2] == undefined) {
    window.location.href = "./profes.html";
}


let profe = args[1];

let materia = args[2];

profe = profe.split("%20").join(" ").split("%C3%B3").join("ó").split("%C3%A1").join("á").split("%C3%A9")
    .join("é").split("%C3%AD").join("í").split("%C3%BA").join("ú").split("%C3%81").join("Á").split("%C3%89")
    .join("É").split("%C3%8D").join("Í")
    .split("%C3%93").join("Ó").split("%C3%9A").join("Ú");;


materia = materia.split("%20").join(" ").split("%C3%B3").join("ó").split("%C3%A1").join("á").split("%C3%A9")
    .join("é").split("%C3%AD").join("í").split("%C3%BA").join("ú").split("%C3%81").join("Á").split("%C3%89")
    .join("É").split("%C3%8D").join("Í")
    .split("%C3%93").join("Ó").split("%C3%9A").join("Ú");

validateForm();

function validateForm() {
    if (document.querySelectorAll('input[name="exp"][type="radio"]:checked').length < 1 || document
        .querySelectorAll('input[name="rit"][type="radio"]:checked').length < 1 || document
        .querySelectorAll('input[name="flx"][type="radio"]:checked').length < 1 || document
        .querySelectorAll('input[name="trab"][type="radio"]:checked').length < 1 || document
        .querySelectorAll('input[name="prep"][type="radio"]:checked').length < 1 || document
        .querySelectorAll('input[name="dif"][type="radio"]:checked').length < 1) {
        document.getElementById("sendReview").setAttribute("disabled", true);
    } else {
        document.getElementById("sendReview").removeAttribute("disabled");
    }
}

document.getElementById("sendReview").onclick = postReview;

function postReview(event) {
    event.preventDefault();


    let xhr3 = new XMLHttpRequest();

    // 2. Configurar: PUT actualizar archivo
    xhr3.open('GET',
        `https://ratemyprofe.herokuapp.com/api/reviews?expedienteEstudiante=${localStorage.expediente}&profesor=${profe}&materia=${materia}`
    );

    xhr3.setRequestHeader('Content-Type', 'application/json');
    // 4. Enviar solicitud

    xhr3.send();

    // 5. Una vez recibida la respuesta del servidor
    xhr3.onload = function () {

        if (xhr3.status != 200) { // analizar el estatus de la respuesta HTTP
            alert("fallo fatal paso 2");

        } else {
            xhr3.response;
            paso3(JSON.parse(xhr3.response));
        }
    };
}

function paso3(resp) {
    if (resp.length > 0) {
        console.log(JSON.stringify(resp));

        alert("Ya reseñaste esta materia");

        window.location.href = `./review.html?${profe}?${materia}`
    } else {
        let overall, difficulty, preparation, workload, flexible, pace;
        let ovrl = document.querySelector("[name=exp]:checked").value;
        let dif = document.querySelector("[name=dif]:checked").value;
        let prep = document.querySelector("[name=prep]:checked").value;
        let carga = document.querySelector("[name=trab]:checked").value;
        let flx = document.querySelector("[name=flx]:checked").value;
        let rit = document.querySelector("[name=rit]:checked").value;


        let newObj = {
            expedienteEstudiante: localStorage.expediente,
            profesor: profe,
            materia: materia,
            experienciaGeneral: parseFloat(ovrl),
            dificultad: parseFloat(dif),
            preparación: parseFloat(prep),
            cargaTrabajo: parseFloat(carga),
            flexibilidad: parseFloat(flx),
            ritmo: parseFloat(rit),
            takeAgain: "",
            Optativa: "",
            Reseña: document.getElementById("reseña").value,
        }

        if (document.getElementById("optativa").checked) {
            newObj.Optativa = "Si";
        } else {
            newObj.Optativa = "No";
        }

        if (document.getElementById("takeAgain").checked) {
            newObj.takeAgain = "Si";
        } else {
            newObj.takeAgain = "No";
        }


        let xhr2 = new XMLHttpRequest();

        // 2. Configurar: PUT actualizar archivo
        xhr2.open('POST',
            `https://ratemyprofe.herokuapp.com/api/reviews`
        );

        xhr2.setRequestHeader('Content-Type', 'application/json');
        xhr2.setRequestHeader('x-auth-user', localStorage.token);
        // 4. Enviar solicitud


        xhr2.send(JSON.stringify(newObj));

        console.log(newObj);
        // 5. Una vez recibida la respuesta del servidor
        xhr2.onload = function () {

            if (xhr2.status != 200 && xhr2.status != 201) { // analizar el estatus de la respuesta HTTP

                alert("ha habido un error");

                console.log(JSON.parse(xhr2.response));

            } 
            else {
                alert("Reseña publicada");
                window.location.href = `./review.html?${profe}?${materia}`

            }
        };
    }




}




let xh = new XMLHttpRequest();

// 2. Configurar: PUT actualizar archivo
xh.open('GET', `https://ratemyprofe.herokuapp.com/api/detalleMaterias?profesor=${profe}&materia=${materia}`);

xh.setRequestHeader('Content-Type', 'application/json');

// 4. Enviar solicitud
xh.send();

// 5. Una vez recibida la respuesta del servidor
xh.onload = function () {

    if (xh.status != 200) { // analizar el estatus de la respuesta HTTP

        alert("Error. No se pueden mostrar los datos de este docente para esta clase");


    } else {
        let detalle = JSON.parse(xh.response)[0];

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