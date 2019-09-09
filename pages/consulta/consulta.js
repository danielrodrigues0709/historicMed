function save() {
    let sintomas = document.getElementById("sintomas").value;
    let anotacoes = document.getElementById("anotacoes").value;
    let exames = document.getElementById("exames").value;
    let medicamentos = document.getElementById("medicamentos").value;
    let dataAtual = function () {
        data = new Date();
        document.getElementById('data').value = data.getDay() + '/' + data.getMonth() + '/' + data.getFullYear();
    };
    const consulta = { dataAtual, sintomas, anotacoes, exames, medicamentos };
    const url = "https://historicmedic.000webhostapp.com/php/insert_consultation.php";
    

    post_to_url(url + "?date=" + consulta.dataAtual + "&sintomas=" + consulta.sintomas + "&anotacoes=" + consulta.anotacoes + "&exames_solicitados=" + consulta.exames + "&medicamentos_indicados=" + consulta.medicamentos, consulta);
        
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
            if(data =="400"){
                console.log("Erro");
            } 
            else{
                console.log("Consulta salva.")
                sucesso();
            }
        }
    }
}



function sucesso() {
    $('#sucesso').modal('show');
}