const imageNames = [
    "assets/gallerypic1.jpg",
    "assets/gallerypic2.jpg",
    "assets/gallerypic3.jpg",
    "assets/gallerypic4.jpg",
    "assets/gallerypic5.jpg",
    "assets/gallerypic6.jpg",
]

const holders = document.querySelectorAll(".holder")

//loop each row, populate with image src from array
holders.forEach((holder, index) => {
    const img = document.createElement("img");
    img.src = imageNames[index % imageNames.length];
    img.style.maxWidth = "100%";
    img.style.height = "auto";
    img.style.display = "block"; // Ensure the image behaves as a block element
    img.style.marginLeft = "auto"; // Center the image horizontally
    img.style.marginRight = "auto"; // Center the image horizontally
    holder.appendChild(img);

    img.addEventListener('click', function(){
        const zoomedimg = document.createElement('img');
        zoomedimg.src = img.src;
        zoomedimg.classList.add('zoomed-image');

        // add navigation arrows
        const leftArrow = document.createElement('button');
        const rightArrow = document.createElement('button');
        leftArrow.classList.add('arrow', 'left');
        rightArrow.classList.add('arrow', 'right');
        leftArrow.innerHTML = '&#11164'; // Add left arrow symbol
        rightArrow.innerHTML = '&#11166;'; // Add right arrow symbol
        document.body.appendChild(leftArrow);
        document.body.appendChild(rightArrow);

        //initialize index for navigating images
        let currentindex = index;
        console.log(index);

        //event listeners for buttons
        leftArrow.addEventListener('click', function(){
            navigate(-1);
        });
        rightArrow.addEventListener('click', function(){
            navigate(1);
        });

        function navigate(direction){
            currentindex += direction;
            if(currentindex < 0){
                currentindex = imageNames.length - 1;
            }else if(currentindex >= imageNames.length){
                currentindex = 0;
            }
            zoomedimg.src = imageNames[currentindex];
            console.log(currentindex);
        }

        zoomedimg.addEventListener('click', function () {
            document.body.removeChild(zoomedimg);
            document.body.removeChild(leftArrow);
            document.body.removeChild(rightArrow);
        });
        document.body.appendChild(zoomedimg);
    });
});


