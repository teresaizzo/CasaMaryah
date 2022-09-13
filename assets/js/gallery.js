let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;
let totalImages = 15;


let showAllButton = document.querySelector("#more-images");

//click on gallery images
if(galleryImages){
    galleryImages.forEach(function(image, index){
        image.onclick = function(){

            // get image name
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("/img/gallery/");
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');


            getLatestOpenedImg = index + 1;

            createCarousel(setNewImgUrl);
        }
    });
}


//click on button show all
if (showAllButton) {
    showAllButton.onclick = function () {
        createCarousel("1.jpeg");
    }
}

// create carousel
function createCarousel(imageUrl){

    let container = document.body;
    let newImgWindow = document.createElement("div");
    container.appendChild(newImgWindow);
    newImgWindow.setAttribute("class", "img-window");
    newImgWindow.setAttribute("onclick", "closeImg()");

    let newImg = document.createElement("img");
    newImgWindow.appendChild(newImg);
    newImg.setAttribute("src", "../assets/img/gallery/" + imageUrl);
    newImg.setAttribute("id", "current-img")

    // create navigation buttons
    newImg.onload = function (){
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode("Next");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn-next");
        newNextBtn.setAttribute("onclick", "changeImg(1)");
        newNextBtn.style.cssText= "right: " + calcImgToEdge + "px;";

        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNode("Prev");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn-prev");
        newPrevBtn.setAttribute("onclick", "changeImg(0)");
        newPrevBtn.style.cssText= "left: " + calcImgToEdge + "px;";


        let counter = document.createElement("p");
        counter.innerText = getLatestOpenedImg+"/"+ totalImages
        counter.setAttribute("id", "counter")
        container.appendChild(counter)

    }
}


function closeImg(){
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
    document.querySelector("#counter").remove();
}


function changeImg(changeDir) {
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let counter = document.querySelector("#counter");

    let calcNewImg;
    if (changeDir === 1) {
        calcNewImg = getLatestOpenedImg + 1;
        if (calcNewImg > totalImages) {
            calcNewImg = 1
        }
        counter.innerText = calcNewImg+"/"+ totalImages
    } else if (changeDir === 0) {
        calcNewImg = getLatestOpenedImg - 1;
        if (calcNewImg < 1) {
            calcNewImg =  totalImages
        }
        counter.innerText = calcNewImg+"/"+ totalImages
    }

    newImg.setAttribute("src", "../assets/img/gallery/" + calcNewImg + ".jpeg");
    newImg.setAttribute("id", "current-img");

    getLatestOpenedImg = calcNewImg;

    //remove this to change dinamically the position of the navigation buttons
    newImg.onload = function () {
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText= "right: " + calcImgToEdge + "px;";

        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText= "left: " + calcImgToEdge + "px;";
    }

}