<?php
    if($_SERVER["REQUEST_METHOD"] === "POST") {
        include "../../db.php";
        $targetDir = "uploads/";
        $randomFileName = uniqid() . "_" . $_FILES["imagem"]["name"];
        $targetFile = $targetDir . $randomFileName;

        if (move_uploaded_file($_FILES["imagem"]["tmp_name"], $targetFile)) {

            $nome = $_POST["nome"];
            $anime = $_POST["anime"];
            $descricao = $_POST["descricao"];
            $curtidas = 0;
            $comentarios = 0;
            $imagem = $targetFile;

            $sql = "INSERT INTO personagens (nome, anime, descricao, curtidas, comentarios, imagem) 
            VALUES ('$nome', '$anime', '$descricao', $curtidas, $comentarios, '$imagem')";
            if (mysqli_query($conn, $sql)) {
                echo "Cadastro realizado com sucesso.";
            } else {
                echo "Erro ao cadastrar: " . mysqli_error($conn);
            }

            exit;
        }
    }else{
        echo "Método não permitido";
    }
?>