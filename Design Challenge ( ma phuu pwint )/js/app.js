// UI 
const iconContainer = document.querySelector(".icon-continer");
const container = document.querySelector(".container"),
    navContainer = document.querySelector(".nav-container");


const photos = ["../img/bg.jpeg", "../img/bg2.jpeg", "../img/bg3.jpg", "../img/bg4.jpg"]
    // addEventListener
iconContainer.addEventListener("click", function() {
    console.log("i am working");
    container.classList.toggle("active");
    navContainer.classList.toggle("active");
})