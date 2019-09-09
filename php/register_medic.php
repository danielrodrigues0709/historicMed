<?php
    require_once ("connect.php");
     
    $name = mysqli_real_escape_string($conn,$_GET['name']);
    $crm = mysqli_real_escape_string($conn,$_GET['crm']);    
	$uf = mysqli_real_escape_string($conn,$_GET['uf']);    
    $especialidade = mysqli_real_escape_string($conn,$_GET['especialidade']);
	
    $email = mysqli_real_escape_string($conn,$_GET['email']);	
    $senha = mysqli_real_escape_string($conn,$_GET['senha']);
	 
	$senha = md5($senha);
	 
	$verificar_crm = mysqli_query($conn,"SELECT * FROM medico WHERE crm = '$crm' AND uf = '$uf'");
	$verificar_email = mysqli_query($conn,"SELECT * FROM medico WHERE email = '$email'");
	 
        if($verificar_crm || $verificar_email){

		    $crm_result = mysqli_num_rows($verificar_crm);
			$email_result = mysqli_num_rows($verificar_email);
		 
		    if($crm_result == 1 || $email_result == 1){
			   die('400'); 
			} 
		    else{
			   $insere = mysqli_query($conn,"INSERT INTO `medico`(`idmedico`, `nome`, `crm`, `uf`, `especialidade`, `email`, `senha`)
                VALUES (NULL,'".$name."','".$crm."','".$uf."','".$especialidade."','".$email."','".$senha."')");
			   die('cadastrou'); 
		    }
	    }

	 
	mysqli_close($conn);
?>