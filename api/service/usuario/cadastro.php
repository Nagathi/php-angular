<?php
    if($_SERVER["REQUEST_METHOD"] === "POST") {
        include "../../db.php";
        $targetDir = "uploads/";
        $randomFileName = uniqid() . "_" . $_FILES["imagem"]["name"];
        $targetFile = $targetDir . $randomFileName;

        if (move_uploaded_file($_FILES["imagem"]["tmp_name"], $targetFile)) {
            $nome = $_POST["nome"];
            $email = $_POST["email"];
            $usuario = $_POST["usuario"];
            $senha = $_POST["senha"];
            $tipo = $_POST["tipo"];
            $imagem = $targetFile;

            $sql = "INSERT INTO usuarios (nome, email, usuario, senha, tipo, imagem) 
            VALUES ('$nome', '$email', '$usuario', '$senha', $tipo, '$imagem')";
            $conn->query($sql);

            exit;
        }
    }else{
        echo "Método não permitido";
    }
?>