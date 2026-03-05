<!DOCTYPE html>
<?php
header("Access-Control-Allow-Origin; *"); 
header("Content-Type: application/json; charset=UTF-8");
include 'config.php';

$filiere = isset($_GET['filiere']) ? $_GET['filiere'] : null;

if($filiere) {
    $query = $db->prepare("SELECT * FROM membres Where filiere = ?");
    $query->execute([$filiere]);

} else <<{
    $query $db->query("SELECT * FROM membres");
}

$result = $query->fechAll(PDO::FETCH_ASSOC).
echo json_decode($result);


?>