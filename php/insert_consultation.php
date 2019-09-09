<?php
    require_once ("connect.php");
     
    $id_paciente = mysqli_real_escape_string($conn,$_GET['id_paciente']);
    $id_medico = mysqli_real_escape_string($conn,$_GET['id_medico']);
    $date = mysqli_real_escape_string($conn,$_GET['date']);
    $sintomas = mysqli_real_escape_string($conn,$_GET['sintomas']);    
    $anotacoes = mysqli_real_escape_string($conn,$_GET['anotacoes']);	
    $exames_solicitados = mysqli_real_escape_string($conn,$_GET['exames_solicitados']);	
    $medicamentos_indicados = mysqli_real_escape_string($conn,$_GET['medicamentos_indicados']);
	 
	$verificar_paciente = mysqli_query($conn,"SELECT * FROM paciente WHERE idpaciente = '$id_paciente'");
	$verificar_medico = mysqli_query($conn,"SELECT * FROM medico WHERE idmedico = '$id_medico'");
	 
        if($verificar_paciente && $verificar_medico){

		    $dados = mysqli_num_rows($verificar_paciente);
			$dados2 = mysqli_num_rows($verificar_medico);
		 
		    if($dados == 0 || $dados2 == 0){
			   die('400'); 
			} 
		    else{
			   $insere = mysqli_query($conn,"INSERT INTO `consulta`(`idconsulta`, `paciente_idpaciente`, `medico_idmedico`, `dt_consulta`, `sintomas`, `anotacoes`, 
			   `exames_solicitados`, `medicamentos_indicados`)
                VALUES (NULL,'".$id_paciente."','".$id_medico."','".$date."','".$sintomas."','".$anotacoes."','".$exames_solicitados."','".$medicamentos_indicados."')");
			   die('consulta_inserida'); 
		    }
	    }
	 
	mysqli_close($conn);
?>