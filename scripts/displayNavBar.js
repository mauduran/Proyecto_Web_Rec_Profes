let nav = document.getElementById("navbar");

if (localStorage.role == "Coordinador" || localStorage.role == "Estudiante") {
    nav.innerHTML = `<img id="logo" src="/img/iteso.png" alt="">
    <a class="navbar-brand" href="#">Rate my Profe ITESO</a>

    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"></button>

    <form class="form-inline  order-0 mx-auto ">
        <input class="form-control w-75 input-lg mr-lg-3" type="text" placeholder="Buscar Profe o Materia">
        <button class="btn my-2 my-sm-0" type="submit">Search</button>
    </form>

        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="materias.html">Materias</a>
            </li>

            <li class="nav-item">
                    <a class="nav-link" href="profes.html">Profesores</a>
            </li>

            <li class="nav-item">
            <a class="nav-link" onclick=logout()>Log Out</a>
        </li>

        </ul>`;
} else if (localStorage.role == "Admin") {




    nav.innerHTML = `<img id="logo" src="/img/iteso.png" alt="">
    <a class="navbar-brand" href="#">Rate my Profe ITESO</a>

    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"></button>

    <form class="form-inline  order-0 mx-auto ">
        <input class="form-control w-75 input-lg mr-lg-3" type="text" placeholder="Buscar Profe o Materia">
        <button class="btn my-2 my-sm-0" type="submit">Search</button>
    </form>

        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="materias.html">Materias</a>
            </li>

            <li class="nav-item">
                    <a class="nav-link" href="profes.html">Profesores</a>
            </li>


            <li class="nav-item">
                    <a class="nav-link" href="#" data-toggle="modal" data-target="#exampleModal">Administrar</a>
            </li>


        </ul>`;

        // document.getElementById("cont").innerHTML = ``;

    

} else {
    nav.innerHTML = `<img id="logo" src="/img/iteso.png" alt="">
    <a class="navbar-brand" href="#">Rate my Profe ITESO</a>

    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"></button>

    <form class="form-inline  order-0 mx-auto ">
        <input class="form-control w-75 input-lg mr-lg-3" type="text" placeholder="Buscar Profe o Materia">
        <button class="btn my-2 my-sm-0" type="submit">Search</button>
    </form>

        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="materias.html">Materias</a>
            </li>

            <li class="nav-item">
                    <a class="nav-link" href="profes.html">Profesores</a>
            </li>


            <li class="nav-item">
                    <a class="nav-link" href="login.html">Login</a>
            </li>

            <li class="nav-item">
                    <a class="nav-link" href="sign_up.html">Sign Up</a>
            </li>


        </ul>`;
}


function logout() {
    localStorage.expediente = undefined;
    localStorage.role = undefined;
    window.location.reload();
}