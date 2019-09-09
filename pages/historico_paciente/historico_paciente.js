function novaConsulta() {
    window.location.href="../consulta/consulta.html"
}

function prontuario() {
    window.location.href = "../prontuario/prontuario.html"
}

window.onload = function () {
    initPage();

    function initPage() {
        let nome = document.getElementById("nome");
        let nascimento = document.getElementById("nascimento");
        let sexo = document.getElementById("sexo");
        let cpf = document.getElementById("cpf");
        let tipoSanguineo = document.getElementById("tipoSanguineo");
        let telefone = document.getElementById("telefone");
        let email = document.getElementById("email");
        let cpf1 = "123"
        const url = "https://historicmedic.000webhostapp.com/php/sctruct_pacient.php?cpf=";
        var requestUrl = url + cpf1
        var request = new XMLHttpRequest();

        request.open("GET", requestUrl);

        request.responseType = 'json';
        request.send();

        request.onload = function () {
            var pacientes = request.response;
            console.log(pacientes);
            showData(pacientes);
        }

        function showData(jsonObj) {
            nome.innerHTML = "Nome completo: " + jsonObj[0].name;
            cpf.innerHTML = "CPF: " + jsonObj[0].cpf;
            nascimento.innerHTML = "Data de Nascimento: " + jsonObj[0].dt_nascimento;
            sexo.innerHTML = "Sexo: " + jsonObj[0].sexo;
            tipoSanguineo.innerHTML = "Tipo Sanguineo: " + jsonObj[0].tipo_sanguineo;
            telefone.innerHTML = "Telefone: " + jsonObj[0].telefone;
            email.innerHTML = "E-mail: " + jsonObj[0].email;
        }
    }
}