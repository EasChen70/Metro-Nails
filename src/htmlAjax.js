document.addEventListener('DOMContentLoaded', function() {
    let bookNow = document.getElementById("bookingbutton");

    bookNow.addEventListener('click', function(){
        const dataForm = document.createElement("div");
        dataForm.classList.add("data-form");
        dataForm.style.height = "500px";
        dataForm.style.width = "600px";
        dataForm.style.backgroundColor = "azure";
        dataForm.style.border = "2px solid"
        dataForm.style.position = "fixed";
        dataForm.style.zIndex = "100";
        dataForm.style.transform = "translate(0%, -30%)";
        dataForm.style.borderRadius = "2%";
        dataForm.style.overflow = "auto";
        if(!bookNow.parentNode.contains(document.querySelector(".data-form"))){
            bookNow.parentNode.insertBefore(dataForm, bookNow);
            loadData('data/data.html');
        };
        dataForm.addEventListener('click', function(){
            bookNow.parentNode.removeChild(dataForm);
        });
    });


    function loadData(filepath){
        let xhr = new XMLHttpRequest();

        xhr.onload = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    document.querySelector(".data-form").innerHTML = xhr.responseText;
                    Array.from(dataForm.children).forEach(child => {
                        child.style.backgroundColor = "inherit";
                    });
                } else{
                    console.error("Error:", xhr.statusText);
                }
            }
        };
        xhr.open('GET', filepath, true);
        xhr.send();
    }
});