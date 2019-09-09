<?php
    require_once ("connect.php");
    
    class Medic{
        public $nome;
        public $crm;
        public $uf;
        public $especialidade;
        public $email;

        public function __construct($NOME,$CRM,$UF,$ESPECIALIDADE,$EMAIL){
            $this->nome = $NOME;
            $this->crm = $CRM;
            $this->uf = $UF;
            $this->especialidade = $ESPECIALIDADE;
            $this->email = $EMAIL;
        }
    }
    $rows = array();

    $query_result_crm = mysqli_real_escape_string($conn,$_GET['crm']);
    $query_result_uf = mysqli_real_escape_string($conn,$_GET['uf']);
	 
	$query_result = mysqli_query($conn,"SELECT * FROM medico WHERE crm = '$query_result_crm' AND uf = '$query_result_uf'");
	 
    while($row = mysqli_fetch_array($query_result)){

        array_push($rows, new Medic($row["nome"],$row["crm"],$row["uf"],$row["especialidade"],$row["email"]));

    }
    
    echo json_encode($rows, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
	
	mysqli_close($conn);
?>