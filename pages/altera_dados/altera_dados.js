function alterar() {
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;
    let senha1 = document.getElementById("senha1").value;
    let senha2 = document.getElementById("senha2").value;

    if (senha1 === senha2)
        console.log("Perfil alterado")
    else {
        this.senhaInvalida();
    }
}

function senhaInvalida() {
    $('#senhaInvalida').modal('show');
}