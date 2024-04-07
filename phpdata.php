<?php 

    class Appointment{
        public $customerID;
        public $time;
        public $serviceType;
        public $status;
        
        public function __construct($customerID, $time, $serviceType){
            $this->customerID = $customerID;
            $this->time = $time;
            $this->serviceType = $serviceType;
            $this->status = 'Not Scheduled';
        }
        
        public function bookAppointment(){
            $this->status = 'Scheduled';
        }
        
        public function cancelAppointment(){
            $this->status = 'Not Scheduled';
        }

        // Setter for status
        public function setStatus($status){
            $this->status = $status;
        }

        // Getter for status
        public function getStatus(){
            return $this->status;
        }
    }
    //https://www.php.net/manual/en/reserved.variables.get.php
    $serviceType = $_GET['type']; 

    switch($serviceType){
        case 'Manicure':
            $appointment = new Appointment('#1312', '10:30AM', 'Manicure');
            break;
        case 'Pedicure':
            $appointment = new Appointment('#2321', '3:00PM', 'Pedicure');
            $appointment->bookAppointment();
            break;
        case 'Spa Combo':
            $appointment = new Appointment('#1007', '4:00PM', 'Spa Combo');
            //setter
            $appointment->setStatus("Unique Scenario");
            break;
        default:
            $appointment = new Appointment(0, 'N/A', 'Unknown');
            break;
    }

    echo "<h2>Appointment Details</h2>";
    echo "<p>Customer ID: {$appointment->customerID}</p>";
    echo "<p>Time: {$appointment->time}</p>";
    echo "<p>Service Type: {$appointment->serviceType}</p>";
    //getter function
    echo "<p>Status: {$appointment->getStatus()}</p>";
?>