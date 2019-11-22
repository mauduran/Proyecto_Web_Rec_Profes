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
} else if(localStorage.role == "Admin"){
    document.body.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Administar</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <table class="table table-hover">
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mensajes del coordinador</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Alta de materias</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Alta de maestros</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Alta maestro-materia</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Revisión credenciales</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Administración de materias</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Administracion de reviews</td>
                        </tr>
                        <tr>
                        <th scope="row">8</th>
                        <td>Administración de usuarios</td>
                        </tr>

                    </tbody>
                </table>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>` + document.body.innerHTML;

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
}else {
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


function logout(){
    localStorage.expediente = undefined;
    localStorage.role = undefined;
    window.location.reload();
}
