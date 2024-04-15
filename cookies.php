<?php
    session_set_cookie_params(3600); // Set session cookie to expire in 1 hour
    session_start();

    // Increment session counter
    $sessioncounter = $_SESSION['sessioncounter'] ?? 0;
    $sessioncounter++;
    $_SESSION['sessioncounter'] = $sessioncounter;
    $sessionMessage = "Session Page Views: " . htmlspecialchars($sessioncounter);


    $cookiecounter = $_COOKIE['cookiecounter'] ?? 0;
    $cookiecounter++;
    setcookie('cookiecounter', $cookiecounter, time() + 3600); 
    $cookieMessage = "Cookie Page Views: " . htmlspecialchars($cookiecounter);

    //terminate function
    if (isset($_GET['terminate']) && $_GET['terminate'] === 'true') {
        $_SESSION = array(); //clear from superglobal
        session_destroy();
    }
?>