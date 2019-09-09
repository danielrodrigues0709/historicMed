function cadastrar() {
    let nome = document.getElementById("nome").value;
    let crm = document.getElementById("crm").value;
    let especialidade = document.getElementById("especialidade").value;
    let uf = document.getElementById("ufMedico").value;
    let hospital = document.getElementById("uf").value;
    let email = document.getElementById("email").value;
    let senha1 = document.getElementById("senha1").value;
    let senha2 = document.getElementById("senha2").value;
    const medico = {nome,crm,especialidade,uf,hospital,email,senha1};
    const url ="https://historicmedic.000webhostapp.com/php/register_medic.php";

    if (nome && crm && especialidade && uf && email && senha1 && senha2) {
        if (senha1 === senha2){
            console.log("Médico cadastrado")
            post_to_url(url+"?name="+medico.nome+"&crm="+medico.crm+"&uf="+medico.uf+"&especialidade="+medico.especialidade+"&email="+medico.email+"&senha="+medico.senha1, medico);
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
    ajax.onreadystatechange = function() {
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