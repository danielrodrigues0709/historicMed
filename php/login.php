<?php
    require_once ("connect.php");
	
	$tipoUsuario = mysqli_real_escape_string($conn,$_GET['tipo']);
    $email = mysqli_real_escape_string($conn,$_GET['email']);	
    $senha = mysqli_real_escape_string($conn,$_GET['senha']);
	 
	$senha = md5($senha);
	$verificar_login = "";
	 
	 //se for paciente
	 if ($tipoUsuario == "paciente"){
		$verificar_login = mysqli_query($conn,"SELECT idpacinte FROM paciente WHERE email = '$email' AND senha = '$senha'");
	 }
	 
	 //se for medico
	 if ($tipoUsuario == "medico"){
		$verificar_login = mysqli_query($conn,"SELECT idmedico FROM medico WHERE email = '$email' AND senha = '$senha'");
	 }
	 
	if($verificar_login){

		$result = mysqli_num_rows($verificar_login);
	 
		if($result == 0){
		   die('404'); 
		} 
		else{
			die('Usuário Logado!');
		}
	}
	 
	mysqli_close($conn);
?>