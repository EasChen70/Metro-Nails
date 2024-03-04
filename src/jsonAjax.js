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
            loadData('data/data.json');
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
                    let dataForm = document.querySelector(".data-form");
                    let jsonData = JSON.parse(xhr.responseText);
                    manicures = jsonData.manicures;
                    pedicures = jsonData.pedicures;
                    spacombos = jsonData.spacombos;

                    manicures.forEach(manicure => {
                        let service = Object.keys(manicure)[0];
                            let selectedService = document.createElement("h3");
                            selectedService.textContent = service;
                            dataForm.appendChild(selectedService);
                        let selected = manicure[service];
                        selected.forEach(detail => {
                            if (detail.Description){
                                let info = document.createElement("p");
                                info.textContent = detail.Description;
                                dataForm.appendChild(info);
                            }else if(detail.Options){
                                let optionList = document.createElement("ul");
                                detail.Options.forEach(option => {
                                    let suboption = document.createElement("li");
                                    suboption.textContent = option;
                                    optionList.appendChild(suboption);
                                    dataForm.appendChild(optionList);
                                })
                            }else if(detail.AddOns){
                                let addonList = document.createElement("ul");
                                detail.AddOns.forEach(option => {
                                    let suboption = document.createElement("li");
                                    suboption.textContent = option;
                                    addonList.appendChild(suboption);
                                    dataForm.appendChild(addonList);
                                })
                            }
                        })
                    })

                    pedicures.forEach(pedicure => {
                        let service = Object.keys(pedicure)[0];
                            let selectedService = document.createElement("h3");
                            selectedService.textContent = service;
                            dataForm.appendChild(selectedService);
                        let selected = pedicure[service];
                        selected.forEach(detail =>{
                            if (detail.Description){
                                let info = document.createElement("p");
                                info.textContent = detail.Description;
                                dataForm.appendChild(info);
                            }else if(detail.Options){
                                let optionList = document.createElement("ul");
                                detail.Options.forEach(option => {
                                    let suboption = document.createElement("li");
                                    suboption.textContent = option;
                                    optionList.appendChild(suboption);
                                    dataForm.appendChild(optionList);
                                })
                            }
                        })
                    })

                    spacombos.forEach(combo => {
                        let service = Object.keys(combo)[0];
                            let selectedService = document.createElement("h3");
                            selectedService.textContent = service;
                            dataForm.appendChild(selectedService);
                        let selected = combo[service];
                        selected.forEach(detail =>{
                            if (detail.Description){
                                let info = document.createElement("p");
                                info.textContent = detail.Description;
                                dataForm.appendChild(info);
                            }else if(detail.Options){
                                let optionList = document.createElement("ul");
                                detail.Options.forEach(option => {
                                    let suboption = document.createElement("li");
                                    suboption.textContent = option;
                                    optionList.appendChild(suboption);
                                    dataForm.appendChild(optionList);
                                })
                            }
                        })
                    })
                    
                } else{
                    console.error("Error:", xhr.statusText);
                }
            }
        };
        xhr.open('GET', filepath, true);
        xhr.send();
    }
});