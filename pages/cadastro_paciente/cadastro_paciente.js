function cadastrar() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let nascimento = document.getElementById("nascimento").value;
    let tipoSexo = document.getElementById("tipoSexo").value;
    let tipoSanguineo = document.getElementById("tipoSanguineo").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;
    let senha1 = document.getElementById("senha1").value;
    let senha2 = document.getElementById("senha2").value;
    const paciente = { nome, cpf, nascimento, tipoSexo, tipoSanguineo, telefone, email, senha1 };
    const url = "https://historicmedic.000webhostapp.com/php/register_patient.php";

    if (nome && cpf && nascimento && tipoSexo && tipoSanguineo) {
        if (senha1 === senha2) {
            console.log("Paciente cadastrado")
            post_to_url(url + "?name=" + paciente.nome + "&cpf=" + paciente.cpf + "&date=" + paciente.nascimento + "&sexo=" + paciente.tipoSexo + "&tipo_sanguineo=" + paciente.tipoSanguineo + "&telefone=" + paciente.telefone + "&email=" + paciente.email + "&senha=" + paciente.senha1, paciente);
        }
        else {
            this.senhaInvalida();

        }
    }
    else {
        this.preencher();
    }
}

function post_to_url(e) {
    var ajax = new XMLHttpRequest();

    ajax.open("POST", e, true);
    
    // Envia a requisição
    ajax.send();

    // Cria um evento para receber o retorno.
    ajax.onreadystatechange = function () {
        // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
        if (ajax.readyState == 4 && ajax.status == 200) {
            var data = ajax.responseText;
            // Retorno do Ajax
            console.log(data);
            if (data == '400') {
                jaCadastrado();
            }
            else {
                sucesso();
            }
        }
    }
}

function preencher() {
    $('#entrar').modal('show');
}

function senhaInvalida() {
    $('#senhaInvalida').modal('show');
}

function sucesso() {
    $('#sucesso').modal('show');
}

function jaCadastrado() {
    $('#jaCadastrado').modal('show');
}