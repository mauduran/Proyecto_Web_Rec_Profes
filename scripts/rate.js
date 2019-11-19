function rate(idName, id) {

    let tmp;
    let idR = 0;
    for (let i = 1; i <= id; i++) {
        tmp = document.getElementById(idName + i);
        tmp.classList.add("checked");
        // if(!tmp.hasAttribute("checked")){
        //     tmp.setAttribute("checked");
        // }
    }

    for (let i = id + 1; i <= 5; i++) {
        tmp = document.getElementById(idName + i);
        // if(tmp.hasAttribute("checked")){
        //     tmp.removeAttribute("checked");
        // }
        tmp.classList.remove("checked");

    }
}

function hoverRate(idName, id) {
    let tmp;
    for (let i = 1; i <= id; i++) {
        tmp = document.getElementById(idName + i);
        tmp.classList.remove("shut");
        tmp.classList.add("hovered");
        // if(!tmp.hasAttribute("checked")){
        //     tmp.setAttribute("checked");
        // }
    }

    for (let i = id + 1; i <= 5; i++) {
        tmp = document.getElementById(idName + i);
        tmp.classList.add("shut");
        // if(tmp.hasAttribute("checked")){
        //     tmp.removeAttribute("checked");
        // }
        tmp.classList.remove("hovered");
    }
}

function clearRate(idName) {
    for (let i = 1; i % 6 != 0; i++) {
        let tmp = document.getElementById(idName + i);
        tmp.classList.remove("hovered");
        tmp.classList.add("shut");
        if (tmp.classList.contains("checked")) {
            tmp.classList.remove("shut");
        }

    }
}