const navItemDropDownList = document.querySelectorAll('.nav-item-dropdown');
const navTogglerOpen = document.querySelector('.navbar-toggler-open');
const navTogglerClose = document.querySelector('.navbar-toggler-close');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');

navItemDropDownList.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        navItem.nextElementSibling.classList.toggle('show-dropdown');
        if(navItem.firstElementChild.className == "fas fa-chevron-down"){
            navItem.firstElementChild.className = "fas fa-chevron-up";
        } else if(navItem.firstElementChild.className == "fas fa-chevron-up"){
            navItem.firstElementChild.className = "fas fa-chevron-down";
        }
    });
});

navTogglerOpen.addEventListener('click', () =>{
    navbarCollapseDiv.classList.add('show-navbar');
});

navTogglerClose.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('show-navbar');
});

// animation and transition stopper
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});
//cookie
const cookieModal = document.querySelector(".cookie-consent-modal")
const cancelCookieBtn = document.querySelector(".btn.cancel")
const acceptCookieBtn = document.querySelector(".btn.accept")

cancelCookieBtn.addEventListener("click", function (){
    cookieModal.classList.remove("active")
})
acceptCookieBtn.addEventListener("click", function (){
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccepted", "yes")
})

setTimeout(function (){
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted != "yes"){
        cookieModal.classList.add("active")
    }
}, 2000)
