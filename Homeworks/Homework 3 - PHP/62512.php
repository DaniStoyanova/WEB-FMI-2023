<?php
require_once 'Db.php';
function getUser($id)
{
    $db = new Db();
    $connection = $db->getConnection();
    $query = "SELECT * FROM users WHERE id = :id";

    $statement = $connection->prepare($query);
    $statement->bindParam(':id', $id, PDO::PARAM_INT);
    $statement->execute();

    $user = $statement->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        return [
            "id" => $user["id"],
            "name" => $user["name"],
            "email" => $user["email"]
        ];
    }

    return null;
}
?>