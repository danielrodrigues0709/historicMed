function submitForm() {
    let usu = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usu && senha) {
        console.log("Logar como médico");
        window.location.href = "home/home.html";
    }
    else {
        this.preencher();
    }
}

function preencher() {
    $('#entrar').modal('show');
    console.log("Preencher campos");
}

function cadastrar() {
    console.log("Cadastrar médico");
    window.location.href = "../pages/cadastro_medico/cadastro_medico.html";
}