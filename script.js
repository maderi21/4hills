const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    //get current class
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for next slide
    if(current.nextElementSibling) {
        //add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
       //add current to start
       slides[0].classList.add('current'); 
    }
    setTimeout(() => current.classList.remove('current'))
};


const prevSlide = () => {
    //get current class
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for prevslide
    if(current.previousElementSibling) {
        //add current to prevsibling
        current.previousElementSibling.classList.add('current');
    } else {
       //add current to last
       slides[slides.length -1].classList.add('current'); 
    }
    setTimeout(() => current.classList.remove('current'));
};


//button events

next.addEventListener('click', e => {
    nextSlide();
});

prev.addEventListener('click', e => {
    prevSlide();
});


//auto slide
if(auto) {
    //run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}

//search bar

let inputBox = document.querySelector(".input-box"),
search = document.querySelector(".search"),
closeIcon = document.querySelector("#cancel");

search.addEventListener("click", () => inputBox.classList.add("open"));
closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));