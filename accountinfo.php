<?php
include "includes/databaseconnection.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href = "css/expanded.css">
    <title>Login</title>
</head>
<body>
        <!-- Header content, includes logo + navbar -->
        <header>
        <div class = "logo">
            <a href = "index.php"><img src = "assets/OriginalLogo.png" alt= "Original Logo"></a>
        </div>
        <div class = "navigation">
            <a href = "index.php">Home</a>
            <div class = "dropdown1">
                <a href = "services.html">Services</a>
                <div class = "dropdown1-content">
                    <a href = "manicure.html">Manicure</a>
                    <a href = "pedicure.html">Pedicure</a>
                    <a href = "spacombo.html">Spa Combo</a>
                </div>
            </div>
            <div class = "dropdown2">
                <a href = "about.html">About</a>
                <div class = "dropdown2-content">
                    <a href = "location.html">Location</a>
                    <a href = "gallery.html">Gallery</a>
                </div>
            </div>            
            <a href = "contact.html">Contact</a>
            <a href = "accountinfo.php">Account</a>
        </div>
    </header>
    <main id = "account-main">
        <div id = "login">
            <p id = "signinfo" >Sign Up</p>
            <form action = "accountinfo.php"  method = "POST">
                <label for="username">Name</label><br>
                <input type="text" id="username" name="username" required><br>
                <label for="email">Email</label><br>
                <input type="text" id="email" name="email" required><br>
                <label for="password">Password</label><br>
                <input type="text" id="password" name="password" required><br>
                <label for="birthday">Birthday</label><br>
                <input type="date" id="birthday" name="birthday" required><br>
                <input type="submit" value="Login">
                <?php
                if ($_SERVER['REQUEST_METHOD'] === 'POST'){
                    $userID = substr(uniqid(), 0, 6);
                    $username = $_POST['username'] ?? '';
                    $email = $_POST['email'] ?? '';
                    $password = $_POST['password'] ?? '';
                    $birthday = $_POST['birthday'] ?? '';
                    //make sure the user filled in all info
                    if (!empty($username) && !empty($email) && !empty($password) && !empty($birthday)) {
                        $sql = "INSERT INTO users (UserID, name, email, password, birthday) VALUES (?, ?, ?, ?, ?)";
                        $stmt = pdo($pdo, $sql, [$userID, $username, $email, $password, $birthday]);
                        if ($stmt->rowCount() > 0){
                            echo "User data inserted successfully! Your ID is: " . $userID ;
                        } else {
                            echo "Error inserting user data.";
                        }
                    }
                }    
                ?>
            </form> 
        </div>
        <!--  -->
        <div id="retrieve">
            <p id="viewretrieveinfo">View Appointment Details</p>
            <form action="accountinfo.php" method="POST">
                <label for="ID">Enter ID</label><br>
                <input type="text" id="ID" name="ID" required><br>
                <label for="name">Enter Name</label><br>
                <input type="text" id="name" name="name" required><br>
                <label for="phone">Enter Phone</label><br>
                <input type="text" id="phone" name="phone" required><br>
                <input type="submit" name = "Retrieve" value="Retrieve Details">
                <input type="submit" name = "Update" value="Update">
                <input type="submit" name = "Delete" value="Delete">
                <?php
                if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                    $id = $_POST['ID'] ?? '';
                    $name = $_POST['name'] ?? ''; 
                    $phone = $_POST['phone'] ?? ''; 
                    // isset checks which button is clicked, its a bit janky 
                    // https://www.php.net/manual/en/function.isset.php
                    if(isset($_POST['Retrieve'])){
                        $sql = "SELECT Date, Attendees, Service FROM customers WHERE ID = ? AND Name = ? AND Phone = ?";
                        $stmt = pdo($pdo, $sql, [$id, $name, $phone]);
                    
                        if ($stmt->rowCount() > 0) {
                            while ($row = $stmt->fetch()) {
                                echo "<p>Date: " . htmlspecialchars($row['Date']) . "</p>";
                                echo "<p>Attendees: " . htmlspecialchars($row['Attendees']) . "</p>";
                                echo "<p>Service: " . htmlspecialchars($row['Service']) . "</p>";
                            }
                        } else {
                            echo "<p>No data found.</p>";
                        }
                    }
                    elseif (isset($_POST['Update'])) {
                        $sql = "UPDATE customers SET Name = ?, Phone = ? WHERE ID = ?";
                        $stmt = pdo($pdo, $sql, [$name, $phone, $id]);
                        
                        if ($stmt->rowCount() > 0) {
                            echo "User data updated successfully!";
                        } else {
                            echo "Error updating user data.";
                        }
                    }
                    elseif (isset($_POST['Delete'])) {
                        $sql = "DELETE FROM customers WHERE ID = ?";
                        $stmt = pdo($pdo, $sql, [$id]);
                        
                        if ($stmt->rowCount() > 0) {
                            echo "User data deleted successfully!";
                        } else {
                            echo "Error deleting user data.";
                        }
                    }
                }

                ?>
            </form>
        </div>
    </main>
</body>
</html>