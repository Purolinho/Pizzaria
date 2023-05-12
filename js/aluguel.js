var mesa1 = document.getElementById("mesa1").addEventListener("click", escolhermesa)
var mesa2 = document.getElementById("mesa2").addEventListener("click", escolhermesa)
var mesa3 = document.getElementById("mesa3").addEventListener("click", escolhermesa)
var mesa4 = document.getElementById("mesa4").addEventListener("click", escolhermesa)
var mesa5 = document.getElementById("mesa5").addEventListener("click", escolhermesa)
var mesa6 = document.getElementById("mesa6").addEventListener("click", escolhermesa)
var mesa7 = document.getElementById("mesa7").addEventListener("click", escolhermesa)
var mesa8 = document.getElementById("mesa8").addEventListener("click", escolhermesa)
var mesa_escolhida;

var menu = document.getElementById("menu")

var nome = document.getElementById("nome_locatario")
var entrada = document.getElementById("horario_entrada")
var saida = document.getElementById("horario_saida")
var enviar = document.getElementById("enviar").addEventListener("click", () => {
    nome = nome.value
    entrada = entrada.value
    saida = saida.value
    if(nome == "" || entrada == "" || saida == "") {
        alert("Porfavor preencha todos os dados nescessarios") 
    } else {
        mesa_escolhida.style.backgroundColor = "gold"
        mesa_escolhida.innerHTML = "Locatario: " + nome + "<br>" + "Entrada: " + entrada + "<br>" + "Saída: " + saida 
        menu.style.display = "none"
    }
})

function escolhermesa() {
    mesa_escolhida = this
    if(mesa_escolhida.style.backgroundColor == "red") {
        alert("A mesa que escolheu já está ocupada, porfavor escolha outra")
        menu.style.display = "none"
    } else {
        menu.style.display = "flex"
    }   
}

for(let i = 1; i <= 8; i++) {
    let random = Math.floor(Math.random() * 2)
    let mesa = document.getElementById("mesa"+i)
    if(random == 0) {
        mesa.style.backgroundColor = "red"
    } else {
        mesa.style.backgroundColor = "green"
    }
}
