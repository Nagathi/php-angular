<?php
    if($_SERVER["REQUEST_METHOD"] === "POST") {
        include "../../db.php";

        $data = json_decode(file_get_contents("php://input"), true);

        $descricao = $data["descricao"];
        $usuario_id = $data["usuario_id"];
        $personagem_id = $data["personagem_id"];
        
        $sql = "INSERT INTO comentarios 
        (descricao, usuario_id, personagem_id) VALUES ('$descricao', $usuario_id, $personagem_id)";
        $result = $conn->query($sql);

        $sql = "UPDATE personagens
                SET comentarios = comentarios+1
                WHERE id = $personagem_id;";
        $conn->query($sql);

        echo "Comentário realizado com sucesso.";

        exit;
    }else{
        echo "Método não permitido";
    }
?>