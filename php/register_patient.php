<?php
    require_once ("connect.php");
     
    $name = mysqli_real_escape_string($conn,$_GET['name']);
    $cpf = mysqli_real_escape_string($conn,$_GET['cpf']);
    $date = mysqli_real_escape_string($conn,$_GET['date']);
    $sexo = mysqli_real_escape_string($conn,$_GET['sexo']);
    
    $tipo_sanguineo = mysqli_real_escape_string($conn,$_GET['tipo_sanguineo']);
	$telefone = mysqli_real_escape_string($conn,$_GET['telefone']);	
	
    $email = mysqli_real_escape_string($conn,$_GET['email']);	
    $senha = mysqli_real_escape_string($conn,$_GET['senha']);
	 
	$senha = md5($senha);
	 
	$verificar_cpf = mysqli_query($conn,"SELECT * FROM paciente WHERE cpf = '$cpf'");
	$verificar_email = mysqli_query($conn,"SELECT * FROM paciente WHERE email = '$email'");
	 
        if($verificar_cpf || $verificar_email){

		    $cpf_result = mysqli_num_rows($verificar_cpf);
			$email_result = mysqli_num_rows($verificar_email);
		 
		    if($cpf_result == 1 || $email_result == 1){
			   die('400'); 
			} 
		    else{
			   $insere = mysqli_query($conn,"INSERT INTO `paciente`(`idpaciente`, `nome`, `cpf`, `dt_nascimento`, `sexo`, `tipo_sanguineo`, `telefone`, `email`, `senha`)
                VALUES (NULL,'".$name."','".$cpf."','".$date."','".$sexo."','".$tipo_sanguineo."','".$telefone."','".$email."','".$senha."')");
				$id = mysqli_insert_id($conn);
				echo("id: $id - ");
			   die('cadastrou'); 
		    }
	    }
	 
	mysqli_close($conn);
?>