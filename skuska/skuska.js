let slides = document.querySelectorAll('.slide-container');
let index = 0;

// next function

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

// prev function

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// quantity increment 

const plus = document.querySelector('.plus'),
minus = document.querySelector('.minus'),
num = document.querySelector('.num');

let a = 0;

plus.addEventListener("click", ()=>{
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
});


minus.addEventListener("click", ()=>{
    if(a > 0){
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
    };
});