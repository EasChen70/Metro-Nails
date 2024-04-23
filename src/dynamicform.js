document.addEventListener('DOMContentLoaded', function(){
    let bookingbuttons = document.querySelectorAll(".booking");

    bookingbuttons.forEach(function(button){
        button.addEventListener('click', function(){

            //create dataform
            const dataForm = document.createElement("div");
            dataForm.classList.add("data-form");
            dataForm.style.height = "500px";
            dataForm.style.width = "600px";
            dataForm.style.backgroundColor = "azure";
            dataForm.style.border = "2px solid";
            dataForm.style.position = "fixed";
            dataForm.style.top = "200px"; 
            dataForm.style.left = "250px";
            dataForm.style.zIndex = "80";
            dataForm.style.transform = "translate(0%, -30%)";
            dataForm.style.borderRadius = "2%";
            dataForm.style.overflow = "auto";
            ////////////////////////////////////////////////////////////////////


            // Add click event listener to dataForm to prevent duplicate
            dataForm.addEventListener('click', function(event) {
                event.stopPropagation(); // Prevent clicks on dataForm from closing it
            });

            //based on which button user clicks, display information
            if (!button.parentNode.contains(dataForm)) {
                button.parentNode.insertBefore(dataForm, button);
                loadData(dataForm); // Load data
            }
        })
    })

    function loadData(dataForm){
        //newxmlhttprequest
        let xhr = new XMLHttpRequest();

        xhr.onload = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    //populate with data
                    dataForm.innerHTML = xhr.responseText;
                
                    //added close button feature
                    const closeButton = document.createElement("button");
                    closeButton.innerHTML = "&times;"; 
                    closeButton.classList.add("close-button"); 
                    closeButton.style.position = "absolute";
                    closeButton.style.top = "10px";
                    closeButton.style.right = "10px";
                    closeButton.style.fontSize = "20px";
                    closeButton.style.backgroundColor = "transparent";
                    closeButton.style.border = "none";
                    closeButton.style.cursor = "pointer";
                    closeButton.style.zIndex = "101";
                    // Append close button to dataForm
                    dataForm.appendChild(closeButton);

                    // Add click event listener to the close button
                    closeButton.addEventListener('click', function() {
                        dataForm.parentNode.removeChild(dataForm); // Remove the dataForm when close button is clicked
                    });                
                } else{
                    console.error("Error:", xhr.statusText);
                }
            }
        };
        // Load data from processform.php
        xhr.open('GET', 'includes/processform.php', true);
        xhr.send();
    }
})
