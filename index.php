<?php include 'includes/cookies.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- link to style sheet -->
    <link rel = "stylesheet" href = "css/styles.css">
    <title>MetroNails Home</title>
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
    <!-- Main content of the page -->
    <main>
        <div class = "MissionStatement">
            <!-- <img src = "" alt = ""> -->
            <h1>MetroNails</h1>
            <h2>Experience Beauty, Comfort, and Care</h2>
        </div>
        <div class = "Description">
            <p>Discover Metro Nails in Providence, RI, where exceptional service meets unmatched hospitality. Our skilled technicians offer top-quality pedicures, manicures, and spa combos, ensuring you leave feeling pampered and rejuvenated. With quick, efficient service and a commitment to excellence, we cater to your needs with kindness and accommodation. Book your appointment easily on our user-friendly website. Experience the Metro Nails difference today – where quality, convenience, and hospitality are always in style.</p>
        </div>
        <div class = "Images">
            <div class = "Manicure">
                <img src = "assets/manicure.jpg" alt = "manicure">
                <div class = "button-container">
                    <a href="manicure.html" class="button">Manicure</a>
                </div>
                <h6><a href="https://www.freepik.com/free-photo/woman-nail-salon-receiving-manicure-by-beautician-beauty-treatment-concept_10880993.htm#query=manicure&position=16&from_view=author&uuid=80bdf904-8b5c-4e51-8fae-196c226640b0">Image by valuavitaly on Freepik</a></h6>
            </div>
            <div class = "Pedicure">
                <img src = "assets/pedicure.jpg" alt = "pedicure">
                <div class = "button-container">
                    <a href="pedicure.html" class="button">Pedicure</a>
                </div>
                <h6><a href="https://www.freepik.com/free-photo/beauty-treatment-photo-nice-feet-applying-pedicure_10223199.htm#query=pedicure&position=24&from_view=author&uuid=a1077b15-ad23-40b4-87c7-f57ab313a680">Image by valuavitaly on Freepik</a></h6>
            </div>
            <div class = "SpaCombo">
                <img src = "assets/spacombo.jpg" alt = "manicure + pedicure combo">
                <div class = "button-container">
                    <a href="spacombo.html" class="button">Spa Combo</a>
                </div>
                <h6><a href="https://www.freepik.com/free-photo/closeup-photo-female-feet-spa-salon-pedicure-manicure-procedure-soft-focus-image_11555362.htm#query=manicure&position=10&from_view=author&uuid=80bdf904-8b5c-4e51-8fae-196c226640b0">Image by valuavitaly on Freepik</a></h6>
            </div>
        </div>
    </main>
    <p style="font-size: 14px;"><?php echo $sessionMessage; ?></p>
    <p style="font-size: 14px;"><?php echo $cookieMessage; ?></p>
    <p style="font-size: 14px;"><a href="?terminate=true">Terminate Session</a></p>
    <!-- Footer -->
    <footer id = "Author">
        <p>Created by: Eason Chen</p>
        <p>Contact us: <a href="mailto:eason_chen@uri.edu">eason_chen@uri.edu</a></p>
    </footer>
    
</body>
</html>