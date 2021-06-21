var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

const personagensPrincipais = {
    'Chris Redfield': 20,
    'Claire Redfield': 30,
    'Jill Valentine': 30,
    'Leon S. Kennedy': 20,
}

const personagensInimigos = {
    'Cerberus': 15,
    'Licker β': 20,
    'Zumbi': 20,
    'Nemesis T-Type': 30,
}

var manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');

    btns.forEach((btn) => {
        btn.classList.remove('active');
    });
});

slides[manual].classList.add('active');
btns[manual].classList.add('active');
    }
    
    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            manualNav(i);
            currentSlide = i;
        });
    });
    
const personagemPrincipal=document.querySelector('.active h2').innerHTML
const personagemInimigo=document.querySelectorAll('.card h1').innerHTML
console.log(personagemPrincipal)
console.log(personagemInimigo)
    