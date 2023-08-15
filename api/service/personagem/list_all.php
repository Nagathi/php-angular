<?php
    if($_SERVER["REQUEST_METHOD"] === "GET"){
        include "../../db.php";
        
        $sql = "SELECT * FROM personagens";
        $result = $conn->query($sql);

        if ($result->num_rows >= 1) {
            $personagens = array();

            while ($row = $result->fetch_assoc()) {
                $personagens[] = $row;
            }

            echo json_encode($personagens);
        } else {
            echo "Não há personagens cadastrados";
        }
    }else{
        echo "Método não permitido";
    }
?>