<?php
    if($_SERVER["REQUEST_METHOD"] === "GET"){
        include "../../db.php";

        $email = $_GET["email"];
        $senha = $_GET["senha"];
        
        $sql = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha'";
        $result = $conn->query($sql);

        if ($result->num_rows === 1) {
            $usuario = $result->fetch_assoc();
            echo json_encode($usuario);
        }else{
            echo "usuario não encontrado";
        }
    }else{
        echo "Método não permitido";
    }
?>