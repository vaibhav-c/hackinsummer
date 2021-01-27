// Function will call when user clicks on any Nav-Link or Close Icon in Mobile View
window.addEventListener('load',function loading() {
    var preload = document.querySelector('.preloader');
    var body = document.querySelector('body');
    body.classList.add('addon')
    preload.classList.add('load-end');
  })

let curs = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    curs.style.left = x - 25 + "px";
    curs.style.top = y - 25 + "px";
});


const switchToSection = () => {

    let mobileView = document.getElementById('mobile_humberger_menu');
    let desktopView = document.getElementById('desktop_menu');

    mobileView.style.display = "none";
    desktopView.style.display = "block";
}

// Function will call when user clicks on Humberger Sign in Desktop View
const openHumbergerMenu = () => {

    let mobileView = document.getElementById('mobile_humberger_menu');
    let desktopView = document.getElementById('desktop_menu');

    desktopView.style.display = "none";  
    mobileView.style.display = "block";
}