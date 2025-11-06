let family = document.getElementById('family');
let farmer =document.getElementById('farmer');
let cyclone = document.getElementById('cyclone');
let dog = document.getElementById('dog');
let ogbg = document.getElementById('ogbg');
let girl = document.getElementById('girl');
let scared = document.getElementById('scared');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    family.style.bottom = value * 0.7 + 'px';
    cyclone.style.left = value * 0.9 + 'px';
    dog.style.top = value * 0.4 + 'px';
    farmer.style.bottom = value * 0.23 + 'px';
    ogbg.style.left = value * 0.1 + 'px';
    girl.style.right = value * 0.15 + 'px';
    scared.style.top = value * 0.2 + 'px';
});