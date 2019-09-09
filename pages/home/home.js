function novoPaciente() {
    console.log("Novo paciente");
    window.location.href = "../../pages/cadastro_paciente/cadastro_paciente.html";
}

function historicoPacienteModal() {
    $('#procPaciente').modal('show');
      
}

function historicoPaciente() {
    const url = "../../pages/historico_paciente/historico_paciente.html?cpf=";
    var cpf = document.getElementById("cpfp");
    window.location.href = url+cpf;
}

function cadastraConsultaModal() {
    $('#cadConsulta').modal('show');
}

function cadastraConsulta() {
    window.location.href = "../../pages/consulta/consulta.html";
}