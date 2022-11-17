var area = document.getElementById("area");

function entrar() {
    var nome = prompt("Digite seu nome: ");

    if (nome === "" || nome === null) {
        area.innerHTML = "Informe um nome para acessar!";    
    } else {
        area.innerHTML = "Quem bom que você chegou " + nome;
    }
}