let date_footer = document.getElementById("date");
let annee = new Date().getFullYear()
date_footer.textContent += annee;

// Pour le back-to-top qui apparait et disparait selon la valeur du scroll 
window.addEventListener('scroll', function () {
    //window.scrollY //distance entre le haut de la fenetre et le scroll effectué. c'est une valeur en pixel
    // console.log(window.scrollY);
    if (window.scrollY > 500) {
        document.getElementById("back-to-top").style.display = "block";

    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
});

// bounce du bouton linkedin 
// animate__headShake
let lkn_bounce = document.getElementById('linkedin');
// console.log('ac');
lkn_bounce.addEventListener('mouseenter', function () {
    lkn_bounce.classList.add('animate__animated');
    lkn_bounce.classList.add('animate__headShake');
});
lkn_bounce.addEventListener('mouseleave', function () {
    lkn_bounce.classList.remove('animate__animated');
    lkn_bounce.classList.remove('animate__headShake')
});
// bounce du bouton contactez moi
// animate__headShake
let ctc_bounce = document.getElementById('btn_contact');
// console.log('ac');
ctc_bounce.addEventListener('mouseenter', function () {
    ctc_bounce.classList.add('animate__animated');
    ctc_bounce.classList.add('animate__headShake');
});
ctc_bounce.addEventListener('mouseleave', function () {
    ctc_bounce.classList.remove('animate__animated');
    ctc_bounce.classList.remove('animate__headShake')
});
// bounce du bouton back-to-top
// animate__headShake
let btt_bounce = document.getElementById('back-to-top');
// console.log('ac');
btt_bounce.addEventListener('mouseenter', function () {
    btt_bounce.classList.add('animate__animated');
    btt_bounce.classList.add('animate__headShake');
});
btt_bounce.addEventListener('mouseleave', function () {
    btt_bounce.classList.remove('animate__animated');
    btt_bounce.classList.remove('animate__headShake')
});

// particles
particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#c22085" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 0, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "bubble" }, "onclick": { "enable": false, "mode": "bubble" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });

