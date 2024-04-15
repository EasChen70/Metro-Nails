<?php 
declare(strict_types=1);
    function validateName($username, $min, $max){
        $length = mb_strlen($username);
        return($length >= $min && $length <= $max);
    }

    function validatePhone($phone){
        $phone = preg_replace('/[^0-9]/', '', $phone);
        return (strlen($phone) === 10);
    }
    function validateAttendees($attendees){
        return (is_numeric($attendees) && $attendees <= 5);
    }

    function validateDate($time){
        if (preg_match('/^\d{4}-\d{2}-\d{2}$/', $time)) {
            //https://www.php.net/manual/en/datetime.createfromformat.php
            $input= DateTime::createFromFormat('Y-m-d', $time);
            if ($input !== false) {
                $current = new DateTime();
                // Modify the current date to allow any future date, not just one day ahead
                if ($input > $current) {
                    return true;
                }
            }
        }
        return false;
    }

    function validateServices($services, $array){
        foreach ($services as $service) {
            if (!in_array($service, $array)) {
                return false; 
            }
        }
        return true;
    }

?>