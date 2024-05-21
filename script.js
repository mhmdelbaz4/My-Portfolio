
function toggleClass(){
    const icon = document.querySelector(".nav-icon");
    const links = document.querySelector(".side-nav-links");
    icon.classList.toggle("open");
    console.log(icon.classList)
    links.classList.toggle("open");
}

