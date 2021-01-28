// Function will call when user clicks on any Nav-Link or Close Icon in Mobile View

var hour  = (new Date).getHours() ;

if(!(hour >= 6 && hour <=18))
{
    var body = document.querySelector('.Landing');
    body.classList.add('addon')
}
else{
    var body = document.querySelector('.moon');
    body.classList.add('day')
    var glitch = document.querySelector('.glitch');
    glitch.classList.add('glitch_day')
}


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