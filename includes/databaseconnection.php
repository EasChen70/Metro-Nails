<?php
//from lecture material
    $type = 'mysql';
    $server = '192.185.2.183';
    $DB = 'easonche_appointments';
    $port = '3306';
    $charset = 'utf8mb4';

    $username = 'easonche_appointmentAdmin';
    $password = 'StormNinja123';

    $options  = [                        // Options for how PDO works
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]; 

    $dsn = "$type:host=$server;dbname=$DB;port=$port;charset=$charset"; // Create DSN
    try {                                                               // Try following code
        $pdo = new PDO($dsn, $username, $password, $options);           // Create PDO object
    } catch (PDOException $e) {                                         // If exception thrown
        throw new PDOException($e->getMessage(), $e->getCode());        // Re-throw exception
    }
    
    function pdo(PDO $pdo, string $sql, array $arguments = null)
        {
            if (!$arguments) {                   // If no arguments
                return $pdo->query($sql);        // Run SQL and return PDOStatement object
            }
            $statement = $pdo->prepare($sql);    // If arguments prepare statement
            $statement->execute($arguments);     // Execute statement
            return $statement;                   // Return PDOStatement object
        }
    
?>