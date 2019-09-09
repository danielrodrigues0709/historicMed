window.onload = function () {
    initPage();

    function initPage() {
        let nome = document.getElementById("nome");
        let nascimento = document.getElementById("nascimento");
        let cpf = document.getElementById("cpf");
        let dt_consulta = document.getElementById("dt_consulta");
        let medico = document.getElementById("medico");
        let especialidade = document.getElementById("especialidade");
        let cpf1 = "1222"
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


            
        }
    }
}