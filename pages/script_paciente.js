function submitForm() {
    let usu = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usu && senha) {
        log(usu, senha);
    }
    else {
        this.preencher();
    }

}

function log(cpf, key){
    const url="https://historicmedic.000webhostapp.com/php/login_pacient.php";
    const par= "?cpf="+cpf+"&senha="+key;
    const e =url+par;
    post_to_url(e);
}
function post_to_url(e) {
    var ajax = new XMLHttpRequest();

    ajax.open("GET", e, true);
    
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
                console.log("ERROR");
                
            }
            else {
                window.location.href = "visualizacao_paciente/visualizacao_paciente.html";
            }
        }
    }
}

function preencher() {
    $('#entrar').modal('show');
    console.log("Preencher campos");
}

function cadastrar() {
    console.log("Cadastrar paciente");
    window.location.href = "../pages/cadastro_paciente/cadastro_paciente.html";
}