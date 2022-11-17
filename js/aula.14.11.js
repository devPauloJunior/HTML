var area = document.getElementById("area");

function entrar() {
    var nome = prompt("Qual seu nome?");
    area.innerHTML = "Que bom que você chegou " + nome;
}