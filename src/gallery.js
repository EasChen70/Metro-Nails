//Object with img src, and alt caption properties
class GalleryItem {
    constructor(src, caption) {
        this.src = src;
        this.caption = caption;
    }
}

//array of objects with properties
const galleryItemsData = [
    { src: "assets/gallerypic1.jpg", caption: "Free To Use Image 1, from Pexel.com" },
    { src: "assets/gallerypic2.jpg", caption: "Free To Use Image 2, from Pexel.com" },
    { src: "assets/gallerypic3.jpg", caption: "Free To Use Image 3, from Pexel.com" },
    { src: "assets/gallerypic4.jpg", caption: "Free To Use Image 4, from Pexel.com" },
    { src: "assets/gallerypic5.jpg", caption: "Free To Use Image 5, from Pexel.com" },
    { src: "assets/gallerypic6.jpg", caption: "Free To Use Image 6, from Pexel.com" }
];

const holders = document.querySelectorAll(".holder");

// Create an array of GalleryItem instances
const galleryItems = galleryItemsData.map(data => new GalleryItem(data.src, data.caption));

// Loop through each row, populate with image src from the GalleryItem instances
holders.forEach((holder, index) => {
    const img = document.createElement("img");
    const currentGalleryItem = galleryItems[index % galleryItems.length];
    img.src = currentGalleryItem.src;
    img.alt = currentGalleryItem.caption; // Set alt attribute to the image caption
    img.style.maxWidth = "100%";
    img.style.height = "auto";
    img.style.display = "block";
    img.style.marginLeft = "auto";
    img.style.marginRight = "auto";
    holder.appendChild(img);

    const tooltipContainer = document.createElement("div");
    tooltipContainer.classList.add("tooltip");
    // Append image to tooltip container
    tooltipContainer.appendChild(img);
    // Create tooltip text
    const tooltipText = document.createElement("span");
    tooltipText.classList.add("tooltiptext");
    tooltipText.textContent = img.alt;
    // Append tooltip text to tooltip container
    tooltipContainer.appendChild(tooltipText);
    // Append tooltip container to holder
    holder.appendChild(tooltipContainer);


    img.addEventListener('click', function(){
        const zoomedimg = document.createElement('img');
        zoomedimg.src = img.src;
        zoomedimg.alt = img.alt; // Set alt attribute of zoomed image
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

        // initialize index for navigating images
        let currentindex = index;

        // event listeners for buttons
        leftArrow.addEventListener('click', function(){
            navigate(-1);
        });
        rightArrow.addEventListener('click', function(){
            navigate(1);
        });

        //navigation function checks for bounds, and iterates index
        function navigate(direction){
            currentindex += direction;
            if(currentindex < 0){
                currentindex = galleryItems.length - 1;
            }else if(currentindex >= galleryItems.length){
                currentindex = 0;
            }
            zoomedimg.src = galleryItems[currentindex].src;
            zoomedimg.alt = galleryItems[currentindex].caption; // Update alt attribute
        }

        //when user clicks out of zoomed image, remove the appended children
        zoomedimg.addEventListener('click', function () {
            document.body.removeChild(zoomedimg);
            document.body.removeChild(leftArrow);
            document.body.removeChild(rightArrow);
        });
        document.body.appendChild(zoomedimg);
    });
});