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
const inimigos = document.querySelectorAll('.inimigos')
const texto = document.querySelector('#texto')
const botao = document.querySelector('#calcular')
console.log(botao)

// selecionando o inimigo
//const selecionado = document.querySelectorAll('[data="inimigo-ativo"]')
for (const inimigo of inimigos) {
    inimigo.addEventListener('click',function(){
        if (this.hasAttribute('data')) {
            this.removeAttribute('data')
        } else {
            this.setAttribute('data', 'inimigo-ativo')
        }
    })
}


botao.addEventListener('click', function(){
    const inimigoSelecionado = document.querySelector('.inimigos[data="inimigo-ativo"] h1').innerHTML
    console.log(personagensInimigos, inimigoSelecionado)
    if (document.querySelectorAll('[data="inimigo-ativo"]').length > 1){
        texto.innerHTML = 'MUITOS INIMIGOS SELECIONADOS, DESMARQUE.'
    }else {
        const dano = personagensInimigos[inimigoSelecionado] - personagensPrincipais[personagemPrincipal]
        console.log(dano)
        if ( dano > 0){
            texto.innerHTML = 'Não matou, tente novamente.'
        }else{
            texto.innerHTML = ' Você venceu.'
        }
    }
})