const menuBtn = document.querySelector('.hamburger');
const slideBar = document.querySelector('.slider')



menuBtn.addEventListener(('click'), function () {
    slideBar.classList.toggle('open');
    menuBtn.classList.toggle('open');
})



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

        } else {
            entry.target.classList.remove('show');
        }
    });
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const hiddenElementsUp = document.querySelectorAll('.hiddenUp');
hiddenElementsUp.forEach((el) => observer.observe(el));

const fadeIn = document.querySelectorAll('.fadeIn');
fadeIn.forEach((el) => observer.observe(el));