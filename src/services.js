//Object with img src, and alt caption properties
class BannerItem {
    constructor(src, caption) {
        this.src = src;
        this.caption = caption;
    }
}

class ServiceItem{
    constructor(service, href){
        this.service = service;
        this.href = href;
    }
}

//array of objects with properties
const BannerItemsData = [
    { src: "assets/service-mani.jpg", caption: "Free To Use Image 1, from Pexel.com" },
    { src: "assets/service-pedi.jpg", caption: "Free To Use Image 2, from Pexel.com" },
    { src: "assets/service-spa.jpg", caption: "Free To Use Image 3, from Pexel.com" }
];

const BannerTextData = [
    {service: "Manicure", href: "manicure.html"},
    {service: "Pedicure", href: "pedicure.html"},
    {service: "Spa Combo", href: "spacombo.html"}
]

// Select holders excluding the one with class "holder-services"
const holders = document.querySelectorAll(".service:not(.holder-services)");

// Map data to BannerItem instances
const BannerItems = BannerItemsData.map(data => new BannerItem(data.src, data.caption));
const ServiceItems = BannerTextData.map(data => new ServiceItem(data.service, data.href));

// Loop through holders and append images
holders.forEach((holder, index) => {
    const img = document.createElement("img");
    const currentBannerItem = BannerItems[index];
    img.src = currentBannerItem.src;
    img.alt = currentBannerItem.caption;
    img.style.width = "70%";
    img.style.height = "70%";
    img.style.borderRadius = "5%";
    img.style.margin = "5px";
    img.style.minHeight = "140px";
    img.style.minWidth = "380px";

    const bannerText = document.createElement("h2");
    const currentTextItem = ServiceItems[index];
    bannerText.textContent = currentTextItem.service;

    const link = document.createElement("a"); // Create anchor element
    link.href = currentTextItem.href; // Set the href attribute
    
    bannerText.style.position = "absolute"; // Add position absolute
    bannerText.style.left = "50%"; // Center horizontally
    

    let transformValue;
    let linkTransform;
    let linkWidth;
    if (index === 0) {
        transformValue = "translate(-163%, 130%)";
        linkTransform = "translate(-322%, 200%)";
        linkWidth = "120px";
    } else if (index === 1) {
        transformValue = "translate(-177%, 130%)";
        linkTransform = "translate(-360%, 205%)";
        linkWidth = "110px"; 
    } else {
        transformValue = "translate(-142%, 130%)";
        linkTransform = "translate(-262%, 210%)";
        linkWidth = "141px";
    }
    bannerText.style.transform = transformValue; // Center horizontally
    bannerText.style.backgroundColor = "transparent";
    bannerText.style.fontFamily = "Georgia, sans-serif";
    bannerText.style.color = "azure"; // Set text color to white
    bannerText.style.textShadow = "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black"; 
    
    link.style.display = "block";
    link.style.width = linkWidth;
    link.style.height = "27px";
    link.style.transform = linkTransform;
    link.style.position = "absolute";
    link.style.opacity = 0;
    // link.style.opacity = "0";
    link.addEventListener("click", redirect);

    holder.appendChild(img); 
    holder.appendChild(bannerText);
    holder.appendChild(link);
});

function redirect(event){
    const link = event.target;
    const url = link.getAttribute("href");
    window.location.href = url;
}
