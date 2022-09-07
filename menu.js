const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector("header nav")
const imgWelcome = document.querySelector(".photo-top")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("header a").forEach(
    n => n.addEventListener("click", () =>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

imgWelcome.addEventListener("click", ()=>{
    imgWelcome.classList.toggle("active");
})