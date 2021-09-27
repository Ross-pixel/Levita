let par = document.querySelector("dl");
let desc = par.querySelectorAll("dd")

par.onclick = function (event) {
    for (let dd of desc) {
        if (dd.dataset.dd === event.target.dataset.dt) {
            event.target.classList.toggle("idk")
            dd.classList.toggle("hidden")
        }
    }
}

