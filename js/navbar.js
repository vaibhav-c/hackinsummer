// Function will call when user clicks on any Nav-Link or Close Icon in Mobile View

var hour  = (new Date).getHours() ;

if(!(hour >= 6 && hour <=18))
{
    var body = document.querySelector('.Landing');
    body.classList.add('addon')
    var bird = document.querySelector('.bird');
    bird.classList.add('birdhide')
    var cloud = document.querySelector('.cloud');
    cloud.classList.add('cloud_night');
    /*! JS Bat 2013 - v1.2 - Eric Grange - www.delphitools.info */
;(function () {
    var r=Math.random,n=0,d=document,w=window,
        i=d.createElement('img'),
        z=d.createElement('div'),
        zs=z.style,
        a=w.innerWidth*r(),b=w.innerHeight*r();
    zs.position="absolute";
    zs.left=0;
    zs.top=0;
    zs.opacity=0;
    z.appendChild(i);
    i.src='data:image/gif;base64,R0lGODlhMAAwAJECAAAAAEJCQv///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAQACACwAAAAAMAAwAAACdpSPqcvtD6NcYNpbr4Z5ewV0UvhRohOe5UE+6cq0carCgpzQuM3ut16zvRBAH+/XKQ6PvaQyCFs+mbnWlEq0FrGi15XZJSmxP8OTRj4DyWY1lKdmV8fyLL3eXOPn6D3f6BcoOEhYaHiImKi4yNjo+AgZKTl5WAAAIfkECQEAAgAsAAAAADAAMAAAAnyUj6nL7Q+jdCDWicF9G1vdeWICao05ciUVpkrZIqjLwCdI16s+5wfck+F8JOBiR/zZZAJk0mAsDp/KIHRKvVqb2KxTu/Vdvt/nGFs2V5Bpta3tBcKp8m5WWL/z5PpbtH/0B/iyNGh4iJiouMjY6PgIGSk5SVlpeYmZqVkAACH5BAkBAAIALAAAAAAwADAAAAJhlI+py+0Po5y02ouz3rz7D4biSJbmiabq6gCs4B5AvM7GTKv4buby7vsAbT9gZ4h0JYmZpXO4YEKeVCk0QkVUlw+uYovE8ibgaVBSLm1Pa3W194rL5/S6/Y7P6/f8vp9SAAAh+QQJAQACACwAAAAAMAAwAAACZZSPqcvtD6OctNqLs968+w+G4kiW5omm6ooALeCusAHHclyzQs3rOz9jAXuqIRFlPJ6SQWRSaIQOpUBqtfjEZpfMJqmrHIFtpbGze2ZywWu0aUwWEbfiZvQdD4sXuWUj7gPos1EAACH5BAkBAAIALAAAAAAwADAAAAJrlI+py+0Po5y02ouz3rz7D4ZiCIxUaU4Amjrr+rDg+7ojXTdyh+e7kPP0egjabGg0EIVImHLJa6KaUam1aqVynNNsUvPTQjO/J84cFA3RzlaJO2495TF63Y7P6/f8vv8PGCg4SFhoeIg4UQAAIfkEBQEAAgAsAAAAADAAMAAAAnaUj6nL7Q+jXGDaW6+GeXsFdFL4UaITnuVBPunKtHGqwoKc0LjN7rdes70QQB/v1ykOj72kMghbPpm51pRKtBaxoteV2SUpsT/Dk0Y+A8lmNZSnZlfH8iy93lzj5+g93+gXKDhIWGh4iJiouMjY6PgIGSk5eVgAADs=';
    d.body.appendChild(z);
    function R(o,m){return Math.max(Math.min(o+(r()-.5)*400,m-50),50)}
    function A(){
        var x=R(a,w.innerWidth),y=R(b,w.innerHeight),
            d=5*Math.sqrt((a-x)*(a-x)+(b-y)*(b-y));
        zs.opacity=n;n=1;
        zs.transition=zs.webkitTransition=d/1e3+'s linear';
        zs.transform=zs.webkitTransform='translate('+x+'px,'+y+'px)';
        i.style.transform=i.style.webkitTransform=(a>x)?'':'scaleX(-1)';
        a=x;b=y;
        setTimeout(A,d);
    };setTimeout(A,r()*3e3);
    })();
}
else{
    var body = document.querySelector('.moon');
    body.classList.add('day')
    var glitch = document.querySelector('.glitch');
    glitch.classList.add('glitch_day')
    var tagline = document.querySelector('.tagline');
    tagline.classList.add('tagline_day')
    var timer = document.querySelector('#timer_field');
    timer.classList.add('timer_day')
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


const element = document.querySelector('.img10')
document.addEventListener('scroll', (event) => {
  if (!element) return
  element.style.transform = `translateY(${window.scrollY * 0.2}px)`
})

const element2 = document.querySelector('.img9')
document.addEventListener('scroll', (event) => {
  if (!element2) return
  element2.style.transform = `translateY(${window.scrollY * 0.15}px)`
})
const element3 = document.querySelector('.img8')
document.addEventListener('scroll', (event) => {
  if (!element3) return
  element3.style.transform = `translateY(${window.scrollY * 0.1}px)`
})

const element4 = document.querySelector('.img7')
document.addEventListener('scroll', (event) => {
  if (!element4) return
  element4.style.transform = `translateY(${window.scrollY * 0.05}px)`
})