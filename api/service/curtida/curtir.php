<?php
    if($_SERVER["REQUEST_METHOD"] === "POST") {
        include "../../db.php";

        $data = json_decode(file_get_contents("php://input"), true);

        $usuario_id = $data["usuario_id"];
        $personagem_id = $data["personagem_id"];

        $sql = "SELECT * FROM curtidas WHERE usuario_id = $usuario_id AND personagem_id = $personagem_id";
        $result = $conn->query($sql);
        
        if ($result->num_rows === 1) {

            $row = $result->fetch_assoc();
            $curtir = $row['curtir'];
            $curtida_id = $row['id'];
            $personagem_id = $row['personagem_id'];

            if($curtir){

                $sql = "UPDATE curtidas
                SET curtir = FALSE
                WHERE id = $curtida_id";
                $conn->query($sql);

                $sql = "UPDATE personagens
                SET curtidas = curtidas-1
                WHERE id = $personagem_id";
                $conn->query($sql);

                echo "Query bem sucedida para descurtir";
            }else{
                $sql = "UPDATE curtidas
                SET curtir = TRUE
                WHERE id = $curtida_id";
                $conn->query($sql);

                $sql = "UPDATE personagens 
                SET curtidas = curtidas+1
                WHERE id = $personagem_id";
                $conn->query($sql);

                echo "Query bem sucedida para curtir";
            }
            
        }else{
            $curtir = true;
            $sql = "INSERT INTO curtidas 
            (curtir, usuario_id, personagem_id) VALUES ($curtir, $usuario_id, $personagem_id)";
            $conn->query($sql);
            
            echo "Query bem sucedida";
        }

        exit;
    }else{
        echo "Método não permitido";
    }
?>