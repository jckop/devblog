// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');
const input = document.getElementById('email')
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault()

    // localStorage.setItem('email', input.value);
    // const email = localStorage.getItem('email');
})

// navToggle function
const navToggleFunc = function () {
    nav.classList.toggle('active');
}

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc)