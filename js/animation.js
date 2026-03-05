


const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      section.classList.add('active');
    }
  });
});


const menuBtn = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuBtn.onclick = function(){
    navbar.classList.toggle("active");
}

/* Auto close menu */

document.querySelectorAll("#navbar a").forEach(link => {
    link.onclick = () => {
        navbar.classList.remove("active");
    }
});

