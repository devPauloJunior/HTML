function valida_form() {
    if(document.getElementById("formNome").value.length < 3){
        alert('Por favor, preencha o campo Nome corretamento');
        document.getElementById("formNome").focus();
        return false
    }
    if(document.getElementById("formEndereco").value.length < 3){
        alert('Por favor, preencha o campo endereço corretamento');
        document.getElementById("formEndereco").focus();
        return false
    }
    if(document.getElementById("formReclamacao").value.length < 3){
        alert('Por favor, preencha o campo Reclamação corretamento');
        document.getElementById("formReclamacao").focus();
        return false
    }
}