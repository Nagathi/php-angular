<?php
    if($_SERVER["REQUEST_METHOD"] === "GET"){
        include "../../db.php";
        
        $personagem_id = $_GET["personagem_id"];

        $sql = "SELECT * FROM comentarios WHERE personagem_id = $personagem_id";
        $result = $conn->query($sql);

        if ($result->num_rows >= 1) {
            $comentarios = array();
            while ($row = $result->fetch_assoc()) {
                $comentarios[] = $row;
            }
            echo json_encode($comentarios);
        }else{
            echo "Não há comentários cadastrados";
        }
    }else{
        echo "Método não permitido";
    }
?>