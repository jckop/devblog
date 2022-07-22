// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');
const form = document.getElementById("newseletter")
const input = document.getElementById('email')


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); 
}
form.onsubmit = (event) => {
    window.localStorage.setItem('email', input.value);
    console.log(localStorage.getItem(email))
    event.preventDefault()
}
navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc)