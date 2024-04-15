<?php
declare(strict_types=1);
include 'validationfunctions.php';

//initialized arrays
$initialValues = array(
    'username' => '',
    'phone' => '',
    'time' => '',
    'attendees' => '',
    'services' => array()
);
//error array
$errors = array(
    'username' => '',
    'phone' => '',
    'time' => '',
    'attendees' => '',
    'services' => ''
);
//error message
$messages = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $initialValues['username'] = htmlspecialchars($_POST['username']);
    $initialValues['phone'] =  htmlspecialchars($_POST['phone']);
    $initialValues['time'] =  htmlspecialchars($_POST['time']);
    $initialValues['attendees'] =  htmlspecialchars($_POST['attendees']);
    $initialValues['services'] = $_POST['services'];
    $validOptions = array("manicure", "pedicure", "spacombo");

    $errors['username'] = validateName($initialValues['username'], 2, 20) ? '' : "Must be 2-20 characters";
    $errors['phone'] = validatePhone($initialValues['phone']) ? '' : "Phone must have 10 numbers";
    $errors['time'] = validateDate($initialValues['time']) ? '' : "Date must be in the future";
    $errors['attendees'] = validateAttendees($initialValues['attendees']) ? '' : "Must be 5 or fewer attendees";
    $errors['services'] = validateServices($initialValues['services'], $validOptions) ? '' : "Invalid selection";

    $invalid = implode(", ", array_filter($errors));
    if (!empty($invalid)) {
        $messages = "Please correct the following errors";
    } else {
        $messages = "Your Appointment Has Been Booked!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Form</title>
</head>
<body>
    <form action="processform.php" method="POST">
        <label for="username">Name</label><br>
        <input type="text" id="username" name="username" required><br>
        <label for="phone">Phone</label><br>
        <input type="text" id="phone" name="phone" required><br>
        <label for="time">Date</label><br>
        <input type="date" id="time" name="time" required><br>
        <label for="attendees">Attendees</label><br>
        <input type="number" id="attendees" name="attendees" required><br>

        <label for="services">Services:</label><br>
        <select id="services" name="services[]" multiple required>
            <option value="manicure">Manicure</option>
            <option value="pedicure">Pedicure</option>
            <option value="spacombo">Spa Combo</option>
        </select><br><br>

        <input type="submit" value="Submit">
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        foreach ($errors as $error) {
            echo "<p>$error</p>";
        }
        echo "<p>$messages</p>";
    }
    ?>
</body>
</html>
