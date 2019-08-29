function submitForm() {
    let usu = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usu && senha)
        console.log("Submit form")
    else {
        this.preencher();
    }
}

function preencher() {
    $('#entrar').modal('show');
}