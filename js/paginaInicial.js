var logar = document.getElementById("logar").addEventListener("click", () => {
    location.href = "../html/login.html"
})

var registrar = document.getElementById("registrar").addEventListener("click", () => {
    location.href = "../html/registro.html"
})

var evento = document.getElementById("eventos")
var info3 = document.getElementById("info3")

evento.addEventListener("mouseenter", mostrarinfo)

function mostrarinfo() {
    info3.style.opacity = "1"

}

var sobremesa = document.getElementById("sobremesa")
var info2 = document.getElementById("info2")

sobremesa.addEventListener("mouseenter", () => {
    info2.style.opacity = "1"

})

var info1 = document.getElementById("info1")
var sabordasemana = document.getElementById("sabordasemana")

sabordasemana.addEventListener("mouseenter", () => {
    info1.style.opacity = "1"
})

document.addEventListener("mouseout", () => {
    info3.style.opacity = "0"
    info2.style.opacity = "0"
    info1.style.opacity = "0"
})

