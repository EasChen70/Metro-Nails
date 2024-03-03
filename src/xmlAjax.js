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
            loadData('data/data.xml');
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
                    let xmlDoc = xhr.responseXML;
                    let dataForm = document.querySelector(".data-form")
                    
                    let manicures = xmlDoc.getElementsByTagName("manicures")[0].getElementsByTagName("manicure");
                    let pedicures = xmlDoc.getElementsByTagName("pedicures")[0].getElementsByTagName("pedicure");
                    let spacombos = xmlDoc.getElementsByTagName("spacombos")[0].getElementsByTagName("spacombos");

                    for(let index = 0; index < manicures.length; index++){
                        let manicure = manicures[index];
                        let type = manicure.getElementsByTagName("type")[0].textContent;
                        let service = document.createElement("h3")
                            service.textContent = type;
                            dataForm.appendChild(service);
                        let description = manicure.getElementsByTagName("description")[0].textContent;
                        let info = document.createElement("p");
                            info.textContent = description;
                            dataForm.appendChild(info);
                        let options = manicure.getElementsByTagName("options")[0].textContent;
                        let optionList = document.createElement("ul");
                            for(let j = 0; j < options.length; j++){
                                let option = document.createElement("li");
                                option.textContent = options[j].textContent;
                                optionList.appendChild(option);
                            }
                            dataForm.appendChild(optionList);
                        let add = manicure.getElementsByTagName("add")[0].textContent;
                        let addonList = document.createElement("ul");
                            for(let k = 0; k < add.length; k++){
                                let option = document.createElement("li");
                                option.textContent = add[k].textContent;
                                addonList.appendChild(option);
                            }
                            dataForm.appendChild(addonList);
                    }

                    for(let index = 0; index < pedicures.length; index++){
                        let pedicure = pedicures[index];
                        let type = pedicure.getElementsByTagName("type")[0].textContent;
                        let description = pedicure.getElementsByTagName("description")[0].textContent;
                        let options = pedicure.getElementsByTagName("options")[0].textContent;
                    }

                    for(let index = 0; index < spacombos.length; index++){
                        let combo = spacombos[index];
                        let type = combo.getElementsByTagName("type")[0].textContent;
                        let description = combo.getElementsByTagName("description")[0].textContent;
                        let options = combo.getElementsByTagName("options")[0].textContent;
                    }



                    
                } else{
                    console.error("Error:", xhr.statusText);
                }
            }
        };
        xhr.open('GET', filepath, true);
        xhr.send();
    }
});