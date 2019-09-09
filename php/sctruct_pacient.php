<?php
    require_once ("connect.php");
    
    class Pacient{
        public $name;
        public $cpf;
        public $dt_nascimento;
        public $sexo;
        public $tipo_sanguineo;
        public $telefone;
        public $email;

        public function __construct($NAME,$CPF,$DT_NASCIMENTO,$SEXO,$TIPO_SANGUINEO,$TELEFONE,$EMAIL){
            $this->name = $NAME;
            $this->cpf = $CPF;
            $this->dt_nascimento = $DT_NASCIMENTO;
            $this->sexo = $SEXO;
            $this->tipo_sanguineo = $TIPO_SANGUINEO;
            $this->telefone = $TELEFONE;
            $this->email = $EMAIL;
        }
    }

    $rows = array();

    $query_result_cpf = mysqli_real_escape_string($conn,$_GET['cpf']);
	 
	$query_result = mysqli_query($conn,"SELECT * FROM paciente WHERE cpf = '$query_result_cpf' ");
	 
    while($row = mysqli_fetch_array($query_result)){

        array_push($rows, new Pacient($row["nome"],$row["cpf"],$row["dt_nascimento"],$row["sexo"],$row["tipo_sanguineo"],$row["telefone"],$row["email"]));

    }
    
    echo json_encode($rows, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
	
	mysqli_close($conn);
?>