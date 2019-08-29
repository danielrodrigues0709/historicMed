function cadastrar() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let crm = document.getElementById("crm").value;
    let especialidade = document.getElementById("especialidade").value;
    let hospital = document.getElementById("hospital").value;
    let email = document.getElementById("email").value;
    let senha1 = document.getElementById("senha1").value;
    let senha2 = document.getElementById("senha2").value;

    if (nome && cpf && crm && especialidade && hospital && email && senha1 && senha2)
        console.log("Médico cadastrado")
    else {
        this.preencher();
    }
}

function preencher() {
    $('#entrar').modal('show');
}